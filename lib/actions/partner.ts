'use server';

import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Deal from '@/models/Deal';
import Partner from '@/models/Partner';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sendEmail } from '@/lib/email';
import { z } from 'zod';

const DealSchema = z.object({
  clientName: z.string().min(2, "Client name is required"),
  estimatedValue: z.coerce.number().min(1, "Estimated value must be greater than 0"),
  serviceType: z.enum(['SME', 'Startup', 'Enterprise', 'Individual']),
  notes: z.string().optional(),
});

export async function registerDeal(prevState: unknown, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { message: 'Unauthorized' };
  }

  const validatedFields = DealSchema.safeParse({
    clientName: formData.get('clientName'),
    estimatedValue: formData.get('estimatedValue'),
    serviceType: formData.get('serviceType'),
    notes: formData.get('notes'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Register Deal.',
    };
  }

  const { clientName, estimatedValue, serviceType, notes } = validatedFields.data;

  try {
    await dbConnect();
    
    // Fetch partner to get current tier/commission rate? 
    // Actually, we use a default or the partner's assigned rate.
    // Ideally, we'd look up the partner's specific commission rate if stored, 
    // or use the tier-based default. 
    // For now, let's just create with default 10% (0.10) as per Deal model default.
    
    await Deal.create({
      partnerId: session.user.id,
      clientName,
      estimatedValue,
      serviceType,
      notes,
      dealStatus: 'registered',
      commissionRate: 0.10, // Default, admin can change
    });
    
    // Notify Admin
    await sendEmail({
        to: 'contact@leothetechguy.com',
        subject: `New Deal Registered by ${session.user.name}`,
        html: `<p>Partner <strong>${session.user.name}</strong> registered a new deal for <strong>${clientName}</strong> with estimated value of <strong>$${estimatedValue}</strong>.</p><a href="https://leosystems.ai/admin/deals">Review Deal</a>`,
    });

  } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Failed to create partner application');
  }

  revalidatePath('/partner/dashboard/deals');
  redirect('/partner/dashboard/deals');
}

export async function completeOnboarding() {
  const session = await auth();
  if (!session?.user?.id) return;

  await dbConnect();
  await Partner.findByIdAndUpdate(session.user.id, { hasCompletedOnboarding: true });
  revalidatePath('/partner/dashboard');
}

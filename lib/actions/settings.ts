'use server';

import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const BankDetailsSchema = z.object({
  accountName: z.string().min(2, "Account Name is required"),
  bankName: z.string().min(2, "Bank Name is required"),
  accountNumber: z.string().min(5, "Account Number is required"),
  sortCode: z.string().optional(),
  iban: z.string().optional(),
});

export async function updateBankDetails(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.email) {
    return { message: 'Unauthorized', success: false };
  }

  const validatedFields = BankDetailsSchema.safeParse({
    accountName: formData.get('accountName'),
    bankName: formData.get('bankName'),
    accountNumber: formData.get('accountNumber'),
    sortCode: formData.get('sortCode'),
    iban: formData.get('iban'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please check your inputs.',
      success: false,
    };
  }

  const { accountName, bankName, accountNumber, sortCode, iban } = validatedFields.data;

  try {
    await dbConnect();
    
    await Partner.findOneAndUpdate(
        { email: session.user.email },
        { 
            bankDetails: {
                accountName,
                bankName,
                accountNumber,
                sortCode,
                iban
            }
        }
    );

    revalidatePath('/partner/dashboard/settings');
    revalidatePath('/partner/dashboard/earnings'); // In case we show payment info there
    
    return {
        message: 'Bank details updated successfully.',
        success: true,
        errors: {}
    };

  } catch (error) {
    console.error('Settings update error:', error);
    return {
      message: 'Failed to update settings. Please try again.',
      success: false,
    };
  }
}

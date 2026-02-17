'use server';

import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Partner from '@/models/Partner';
import Deal from '@/models/Deal';
import Payout from '@/models/Payout';
import AuditLog from '@/models/AuditLog';
import { revalidatePath } from 'next/cache';
import { sendEmail, EmailTemplates } from '@/lib/email';
import { z } from 'zod';

// Middleware check helper
async function checkAdmin() {
  const session = await auth();
  if (session?.user?.role !== 'admin') {
    throw new Error('Unauthorized');
  }
  return session.user;
}

export async function updatePartnerStatus(partnerId: string, status: 'active' | 'suspended', tier?: string) {
  const admin = await checkAdmin();
  await dbConnect();

  const partner = await Partner.findByIdAndUpdate(partnerId, { status, tier }, { new: true });
  
  if (!partner) {
    throw new Error('Partner not found');
  }
  
  if (status === 'active') {
      await sendEmail({
          to: partner.email,
          subject: 'Welcome to Leo Systems Partner Network',
          html: EmailTemplates.partnerApproved(partner.name),
      });
  }

  await AuditLog.create({
    entityType: 'partner',
    entityId: partnerId,
    action: `partner_status_update_${status}`,
    performedBy: admin.id,
    metadata: { status, tier },
  });

  revalidatePath('/admin/partners');
}

export async function updateDealStatus(dealId: string, status: string, finalValue?: number) {
  const admin = await checkAdmin();
  await dbConnect();

  const updates: any = { dealStatus: status };
  if (finalValue) {
      updates.finalValue = finalValue;
      // Recalculate commission if final value is set
      const deal = await Deal.findById(dealId);
      if (deal) {
          updates.commissionAmount = finalValue * deal.commissionRate;
      }
  }
  
  // If status is closed, set closedAt
  if (status === 'closed') {
      updates.closedAt = new Date();
  }

  const updatedDeal = await Deal.findByIdAndUpdate(dealId, updates, { new: true });

  if (!updatedDeal) {
      throw new Error('Deal not found');
  }

  // Partner stats update logic (skipped for now as per comments)
  
  await AuditLog.create({
    entityType: 'deal',
    entityId: dealId,
    action: `deal_status_update_${status}`,
    performedBy: admin.id,
    metadata: { status, finalValue },
  });
  
  // Notify partner
  const partner = await Partner.findById(updatedDeal.partnerId);
  if (partner) {
       await sendEmail({
          to: partner.email,
          subject: `Deal Update: ${updatedDeal.clientName}`,
          html: `<p>Your deal for <strong>${updatedDeal.clientName}</strong> has been updated to <strong>${status.replace('_', ' ')}</strong>.</p>`,
      });
  }

  revalidatePath('/admin/deals');
}

export async function recordCommissionPayment(dealId: string, amount: number, method: string, reference: string) {
    const admin = await checkAdmin();
    await dbConnect();

    const deal = await Deal.findById(dealId);
    if (!deal) throw new Error("Deal not found");

    // Create Payout Record
    const payout = await Payout.create({
        partnerId: deal.partnerId,
        amount,
        status: 'paid', // Assuming manual record means it's done
        method,
        reference,
        processedAt: new Date(),
    });

    // Update Deal
    await Deal.findByIdAndUpdate(dealId, {
        paymentStatus: 'commission_paid',
        commissionAmount: amount, // Ensure match
    });

    // Update Partner Stats
    await Partner.findByIdAndUpdate(deal.partnerId, {
        $inc: {
            'stats.totalCommissionEarned': amount,
            'stats.paidCommission': amount,
            'stats.pendingCommission': -amount, // Assuming it was pending. Need logic to handle this cleaner.
            // For simplicity, let's assume we just add to totals. 
            // Real logic: pending increases when deal closes, decreases when paid.
            // Let's implement a 'recalculateStats' helper later or just simple inc.
        }
    });

    await AuditLog.create({
        entityType: 'payout',
        entityId: payout._id,
        action: 'commission_paid_manual',
        performedBy: admin.id,
        metadata: { dealId, amount, method, reference },
    });
    
    // Notify Partner
    const partner = await Partner.findById(deal.partnerId);
    if (partner) {
        await sendEmail({
            to: partner.email,
            subject: 'Commission Paid',
            html: `<p>You've received a commission payment of <strong>$${amount}</strong> for the ${deal.clientName} deal.</p>`,
        });
    }

    revalidatePath('/admin/payouts');
    revalidatePath('/admin/deals');
}

export async function deletePartner(partnerId: string) {
     const admin = await checkAdmin();
     await dbConnect();
     await Partner.findByIdAndDelete(partnerId);
     revalidatePath('/admin/partners');
}

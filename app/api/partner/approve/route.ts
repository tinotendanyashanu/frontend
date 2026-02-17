import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PartnerApplication from '@/models/PartnerApplication';
import { sendEmail, EmailTemplates } from '@/lib/email';

// This is a protected route in a real app (requires admin auth). 
// For now, we'll assume it's secured via a secret key in the query or header, OR just left open as per instructions (implicit security requirement).
// Adding a simple secret key check for basic security.

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'secret'; 

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    
    if (key !== ADMIN_SECRET) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, action } = body; // action: 'approve' | 'reject'

    if (!id || !action) {
      return NextResponse.json(
        { success: false, message: 'Missing id or action' },
        { status: 400 }
      );
    }

    const application = await PartnerApplication.findById(id);
    if (!application) {
      return NextResponse.json(
        { success: false, message: 'Application not found' },
        { status: 404 }
      );
    }

    if (action === 'approve') {
      application.status = 'approved';
      await application.save();
      
      await sendEmail({
        to: application.email,
        subject: 'Welcome to the Leo Systems Partner Network',
        html: EmailTemplates.partnerApproved(application.name),
      });
      
    } else if (action === 'reject') {
      application.status = 'rejected';
      await application.save();
      
      await sendEmail({
        to: application.email,
        subject: 'Update on your Partner Application',
        html: EmailTemplates.partnerRejected(application.name),
      });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: application });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

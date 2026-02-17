import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PartnerApplication from '@/models/PartnerApplication';
import { sendEmail, EmailTemplates, sendAdminNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, companyName, website, partnershipType } = body;

    if (!name || !email || !companyName || !partnershipType) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const application = await PartnerApplication.create({
      name,
      email,
      companyName,
      website,
      partnershipType,
    });

    // Email to User
    await sendEmail({
      to: email,
      subject: 'Your Leo Systems Partner Application',
      html: EmailTemplates.partnerApplicationReceived(name),
      replyTo: 'contact@leothetechguy.com'
    });

    // Email to Admin
    await sendAdminNotification({
      subject: 'Partner Application',
      text: `Name: ${name}\nCompany: ${companyName}\nType: ${partnershipType}\nWebsite: ${website || 'N/A'}`,
      replyTo: email
    });

    return NextResponse.json({ success: true, data: application }, { status: 201 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Consultation from '@/models/Consultation';
import { sendEmail, EmailTemplates, sendAdminNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, topic, date } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    const consultation = await Consultation.create({
      name,
      email,
      topic,
      scheduledDate: date ? new Date(date) : undefined,
    });

    // Email to User
    await sendEmail({
      to: email,
      subject: 'Your Strategy Session Request',
      html: EmailTemplates.consultationConfirmation(name, date),
      replyTo: 'contact@leothetechguy.com'
    });

    // Email to Admin
    await sendAdminNotification({
      subject: 'Consultation Request',
      text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic || 'N/A'}\nRequested Date: ${date || 'N/A'}`,
      replyTo: email
    });

    return NextResponse.json({ success: true, data: consultation }, { status: 201 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

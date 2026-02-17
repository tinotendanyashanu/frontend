import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ProjectInquiry from '@/models/ProjectInquiry';
import { sendEmail, EmailTemplates, sendAdminNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, project, budget, timeline, message } = body;

    if (!name || !email || !project) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to DB (ProjectInquiry model uses 'projectDescription', mapping 'message' or 'project' to it)
    // The frontend currently sends 'project' as the type/title and 'message' as the description.
    // We'll combine them for the description or use message.
    
    const projectInquiry = await ProjectInquiry.create({
      name,
      email,
      projectDescription: message || project, // Fallback
      budget,
      timeline,
      status: 'new'
    });

    // Email to User
    await sendEmail({
      to: email,
      subject: 'Project Inquiry Received',
      html: EmailTemplates.projectInquiryConfirmation(name, project),
    });

    // Email to Admin
    await sendAdminNotification(
      'Project Inquiry',
      `Name: ${name}\nEmail: ${email}\nProject: ${project}\nBudget: ${budget}\nTimeline: ${timeline}\nDescription: ${message}`
    );

    return NextResponse.json({ success: true, data: projectInquiry }, { status: 201 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

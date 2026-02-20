import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import Partner, { IPartner } from '@/models/Partner';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  const partner = await Partner.findOne({ email: session.user.email })
    .select('bankDetails')
    .lean() as unknown as IPartner;

  return NextResponse.json({ bankDetails: partner?.bankDetails || null });
}

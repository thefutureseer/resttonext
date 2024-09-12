import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function GET() {
  console.log('Fetching fresh data................................');
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { headers: { 'Cache-Control': 'no-cache' } });
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
};
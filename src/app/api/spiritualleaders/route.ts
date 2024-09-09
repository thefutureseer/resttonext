import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET() {
  console.log('fetching leaders!!');
  try {
    const spiritualLeaders = await prisma.spiritualleader.findMany();
    return NextResponse.json(spiritualLeaders);
  } catch (error) {
    console.error('Error fetching spiritual leaders:', error);
    return NextResponse.json({ error: 'Failed to fetch spiritual leaders' }, { status: 500 });
  }
};
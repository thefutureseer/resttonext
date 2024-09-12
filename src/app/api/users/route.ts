import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// This is a dynamic API route because it fetches data on each request
export async function GET() {
  console.log('Fetching fresh data');
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

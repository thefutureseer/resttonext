import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';  // Adjust the import path if needed

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate', // Adjust as needed
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.error();
  }
};
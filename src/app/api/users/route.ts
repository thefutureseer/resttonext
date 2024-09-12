import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// This is a dynamic API route because it fetches data on each request
export async function GET() {
  try {
    console.log('Fetching fresh data................................');
    const users = await prisma.user.findMany();

    // Return the users with Cache-Control header to prevent caching
    return NextResponse.json(users, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate', // Prevents caching
        'Pragma': 'no-cache', // For HTTP/1.0 compatibility
        'Expires': '0', // For HTTP/1.0 compatibility
      },
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
};
// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';  // Adjust the import path if needed

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.error();
  }
}
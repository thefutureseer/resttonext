import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/utils/prisma';  // Ensure prisma is configured correctly

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  // Validate required fields
  if (!name || !email || !password) {
    return NextResponse.json({ message: "Name, email, and password are required." }, { status: 400 });
  }

  try {
    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists with this email." }, { status: 409 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    return NextResponse.json({ message: 'Signup successful!', user });
  } catch (err) {
    console.error('Error during signup:', err);
    return NextResponse.json({ message: 'An error occurred during signup.' }, { status: 500 });
  }
}

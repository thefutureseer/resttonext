import { PrismaClient, role_type } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Array of users to seed
  const users = [
    {
      email: 'john.doe@prisma.io',
      name: 'John Doe',
      password: 'hashedpassword1',
      phonenumber: '1234567890',
      profilepicture: null,
      role: role_type.user, // Adjust according to your role_type enum
      address: '123 Elm St',
      rating: 4.5,
      preferences: JSON.stringify({ theme: 'dark', notifications: true }),
      tags: ['tag1', 'tag2'],
    },
    {
      email: 'jane.smith@prisma.io',
      name: 'Jane Smith',
      password: 'hashedpassword2',
      phonenumber: '0987654321',
      profilepicture: 'https://example.com/profile/jane.jpg',
      role: role_type.user, // Adjust according to your role_type enum
      address: '456 Oak St',
      rating: 5.0,
      preferences: JSON.stringify({ theme: 'light', notifications: false }),
      tags: ['tag3', 'tag4'],
    },
    {
      email: 'alice.johnson@prisma.io',
      name: 'Alice Johnson',
      password: 'hashedpassword3',
      phonenumber: '2345678901',
      profilepicture: 'https://example.com/profile/alice.jpg',
      role: role_type.user, // Adjust according to your role_type enum
      address: '789 Pine St',
      rating: 3.5,
      preferences: JSON.stringify({ theme: 'dark', notifications: true }),
      tags: ['tag5'],
    },
    {
      email: 'bob.brown@prisma.io',
      name: 'Bob Brown',
      password: 'hashedpassword4',
      phonenumber: '3456789012',
      profilepicture: null,
      role: role_type.user, // Adjust according to your role_type enum
      address: '101 Maple St',
      rating: 4.0,
      preferences: JSON.stringify({ theme: 'light', notifications: true }),
      tags: ['tag6', 'tag7'],
    },
    {
      email: 'charlie.davis@prisma.io',
      name: 'Charlie Davis',
      password: 'hashedpassword5',
      phonenumber: '4567890123',
      profilepicture: 'https://example.com/profile/charlie.jpg',
      role: role_type.user, // Adjust according to your role_type enum
      address: '202 Birch St',
      rating: 4.8,
      preferences: JSON.stringify({ theme: 'dark', notifications: false }),
      tags: ['tag8'],
    },
  ];

  // Loop through the array and create each user in the database
  for (const user of users) {
    const createdUser = await prisma.user.create({
      data: user,
    });
    console.log('User created:', createdUser);
  }

  for (const user of users) {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      console.log(`User with email ${user.email} already exists`);
    } else {
      const createdUser = await prisma.user.create({
        data: user,
      });
      console.log('User created:', createdUser);
    }
  }

  console.log('5 users have been seeded');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

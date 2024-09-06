import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Array of users to seed
  const users = [
    { name: 'John Doe', email: 'johndoe@example.com', phonenumber: '1234567890' },
    { name: 'Jane Smith', email: 'janesmith@example.com', phonenumber: '0987654321' },
    { name: 'Alice Johnson', email: 'alicejohnson@example.com', phonenumber: '2345678901' },
    { name: 'Bob Brown', email: 'bobbrown@example.com', phonenumber: '3456789012' },
    { name: 'Charlie Davis', email: 'charliedavis@example.com', phonenumber: '4567890123' },
  ];

  // Loop through the array and create each user in the database
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
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
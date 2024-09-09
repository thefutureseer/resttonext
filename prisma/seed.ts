import { PrismaClient, role_type, contactmethod, orderstatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create spiritual leaders
  const spiritualleaders = [
    { name: 'Deepak Chopra', expertise: 'Meditation and Wellness', bio: 'Author and alternative medicine advocate', profilepicture: 'https://example.com/deepak.jpg', contactinfo: 'deepak.chopra@example.com', rating: 4.9 },
    { name: 'Eckhart Tolle', expertise: 'Spiritual Awakening', bio: 'Author of "The Power of Now"', profilepicture: 'https://example.com/eckhart.jpg', contactinfo: 'eckhart.tolle@example.com', rating: 4.8 },
    // Add more spiritual leaders here...
  ];

  // Create spiritual leaders in the database
  const createdLeaders = await Promise.all(
    spiritualleaders.map(leader =>
      prisma.spiritualleader.create({
        data: leader
      })
    )
  );

  // Create users
  const users = [
    {
      name: 'Alice Smith',
      email: 'alice.smith@example.com',
      phonenumber: '+1234567890',
      address: '123 Elm Street, Springfield',
      profilepicture: 'https://example.com/alice.jpg',
      role: role_type.user, // Use the enum value here
    },
    {
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      phonenumber: '+0987654321',
      address: '456 Oak Avenue, Springfield',
      profilepicture: 'https://example.com/bob.jpg',
      role: role_type.user, // Use the enum value here
    },
  ];

  // Create users in the database
  const createdUsers = await Promise.all(
    users.map(user =>
      prisma.user.create({
        data: user
      })
    )
  );

  // Create experiences
  const experiences = await Promise.all([
    prisma.experience.create({
      data: {
        userid: createdUsers[0].id,
        spiritualleaderid: createdLeaders[0].id,
        problemtosolve: 'Stress Management',
        experiencewanted: 'Guidance on reducing work-related stress',
        contactvia: ContactMethod.phone_call, // Use the enum value here
      },
    }),
    prisma.experience.create({
      data: {
        userid: createdUsers[1].id,
        spiritualleaderid: createdLeaders[1].id,
        problemtosolve: 'Relationship Issues',
        experiencewanted: 'Advice on improving personal relationships',
        contactvia: ContactMethod.text_message, // Use the enum value here
      },
    }),
  ]);

  // Create orders
  const orders = await Promise.all([
    prisma.order.create({
      data: {
        userid: createdUsers[0].id,
        spiritualleaderid: createdLeaders[0].id,
        problemtosolve: 'Need help with meditation',
        experiencewanted: 'Daily meditation practice to improve focus',
        contactvia: ContactMethod.video_call, // Use the enum value here
        status: OrderStatus.pending, // Use the enum value here
        experienceid: experiences[0].id, // Link to the created experience
      },
    }),
    prisma.order.create({
      data: {
        userid: createdUsers[1].id,
        spiritualleaderid: createdLeaders[1].id,
        problemtosolve: 'Need relationship counseling',
        experiencewanted: 'One-on-one session for relationship guidance',
        contactvia: ContactMethod.in_person, // Use the enum value here
        status: OrderStatus.completed, // Use the enum value here
        experienceid: experiences[1].id, // Link to the created experience
      },
    }),
  ]);

  console.log('Database seeded successfully');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

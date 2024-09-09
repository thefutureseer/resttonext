import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Import bcrypt

const prisma = new PrismaClient();

// Function to generate a random profile picture URL
const getRandomProfilePicture = () => `https://example.com/profilepic${Math.floor(Math.random() * 100)}.jpg`;

// Function to generate random tags
const getRandomTags = () => ['meditation', 'spirituality', 'counseling', 'personal growth', 'mindfulness', 'wellness'].slice(0, Math.floor(Math.random() * 5) + 1);

// Function to hash passwords
const hashPassword = async (password: string) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

async function main() {
  // Example data to seed
  const spiritualLeaders = [
    {
      name: 'Mahatma Gandhi',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Nonviolent resistance, spiritual leadership',
      bio: 'Leader of the Indian independence movement known for his philosophy of nonviolence.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'gandhi@example.com',
      rating: 4.9,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Martin Luther King Jr.',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Civil rights, nonviolent protest',
      bio: 'American civil rights leader known for his advocacy of nonviolent protest and equality.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'mlk@example.com',
      rating: 4.8,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Mother Teresa',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Charity work, humanitarian aid',
      bio: 'Catholic nun known for her work with the poor and sick in Calcutta.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'motherteresa@example.com',
      rating: 4.7,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Dalai Lama (13th)',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Tibetan Buddhism, meditation',
      bio: 'The 13th Dalai Lama was a prominent Tibetan spiritual leader and a key figure in Tibetan Buddhism.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'dalailama13@example.com',
      rating: 4.9,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Ramana Maharshi',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Self-realization, meditation',
      bio: 'Indian sage known for his teachings on self-realization and meditation.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'ramana@example.com',
      rating: 4.8,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Swami Vivekananda',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Vedanta, Yoga',
      bio: 'Indian Hindu monk known for his introduction of Indian philosophies of Vedanta and Yoga to the Western world.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'vivekananda@example.com',
      rating: 4.7,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Paramahansa Yogananda',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Kriya Yoga, spiritual teaching',
      bio: 'Indian yogi and guru who introduced Kriya Yoga to the Western world.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'yogananda@example.com',
      rating: 4.8,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Sathya Sai Baba',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Spirituality, service',
      bio: 'Indian spiritual leader known for his teachings on love, compassion, and service.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'sathya@example.com',
      rating: 4.6,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Osho (Bhagwan Shree Rajneesh)',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Meditation, personal transformation',
      bio: 'Indian spiritual teacher known for his dynamic meditations and teachings on personal transformation.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'osho@example.com',
      rating: 4.5,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
    {
      name: 'Thich Nhat Hanh',
      password: await hashPassword('password123'), // Hash the password
      expertise: 'Mindfulness, engaged Buddhism',
      bio: 'Vietnamese Zen master known for his teachings on mindfulness and engaged Buddhism.',
      profilepicture: getRandomProfilePicture(),
      contactinfo: 'thichnhathanh@example.com',
      rating: 4.8,
      tags: getRandomTags(),
      interactions: { lastInteraction: new Date() },
    },
  ];

  for (const leader of spiritualLeaders) {
    await prisma.spiritualleader.create({
      data: leader,
    });
  }

  console.log('Seeding complete.');
}

main()
  .catch(e => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
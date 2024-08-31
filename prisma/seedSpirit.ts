import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create spiritual leaders
  const spiritualLeaders = [
    {
      name: 'Dalai Lama',
      expertise: 'Tibetan Buddhism',
      bio: 'Tibetan Buddhist leader and Nobel Peace Prize laureate.',
      profilepicture: 'https://example.com/dalai-lama.jpg',
      contactinfo: 'dalai.lama@example.com',
      rating: 5.0,
    },
    {
      name: 'Thich Nhat Hanh',
      expertise: 'Zen Buddhism',
      bio: 'Vietnamese Zen Buddhist monk, poet, and peace activist.',
      profilepicture: 'https://example.com/thich-nhat-hanh.jpg',
      contactinfo: 'thich.nhat.hanh@example.com',
      rating: 4.9,
    },
    {
      name: 'Deepak Chopra',
      expertise: 'Alternative Medicine',
      bio: 'Indian-American author and alternative medicine advocate.',
      profilepicture: 'https://example.com/deepak-chopra.jpg',
      contactinfo: 'deepak.chopra@example.com',
      rating: 4.8,
    },
    {
      name: 'Eckhart Tolle',
      expertise: 'Spiritual Teachings',
      bio: 'German-born spiritual teacher and author of "The Power of Now".',
      profilepicture: 'https://example.com/eckhart-tolle.jpg',
      contactinfo: 'eckhart.tolle@example.com',
      rating: 4.7,
    },
    {
      name: 'Pope Francis',
      expertise: 'Roman Catholicism',
      bio: 'Current Pope of the Roman Catholic Church.',
      profilepicture: 'https://example.com/pope-francis.jpg',
      contactinfo: 'pope.francis@example.com',
      rating: 4.6,
    },
    {
      name: 'Sri Sri Ravi Shankar',
      expertise: 'Spirituality and Yoga',
      bio: 'Indian spiritual leader and founder of the Art of Living Foundation.',
      profilepicture: 'https://example.com/sri-sri-ravi-shankar.jpg',
      contactinfo: 'sri.sri.ravi.shankar@example.com',
      rating: 4.8,
    },
    {
      name: 'Ram Dass',
      expertise: 'Spiritual Teachings',
      bio: 'American spiritual teacher and author of "Be Here Now".',
      profilepicture: 'https://example.com/ram-dass.jpg',
      contactinfo: 'ram.dass@example.com',
      rating: 4.7,
    },
    {
      name: 'Sadhguru',
      expertise: 'Yoga and Meditation',
      bio: 'Indian yogi and mystic, founder of the Isha Foundation.',
      profilepicture: 'https://example.com/sadhguru.jpg',
      contactinfo: 'sadhguru@example.com',
      rating: 4.8,
    },
    {
      name: 'Mooji',
      expertise: 'Advaita',
      bio: 'Jamaican spiritual teacher in the Advaita tradition.',
      profilepicture: 'https://example.com/mooji.jpg',
      contactinfo: 'mooji@example.com',
      rating: 4.6,
    },
    {
      name: 'Osho',
      expertise: 'Mysticism and Meditation',
      bio: 'Indian mystic and founder of the Rajneesh movement.',
      profilepicture: 'https://example.com/osho.jpg',
      contactinfo: 'osho@example.com',
      rating: 4.5,
    },
  ];

  // Seed spiritual leaders
  for (const leader of spiritualLeaders) {
    await prisma.spiritualLeader.create({
      data: leader,
    });
  }

  console.log('Spiritual leaders seeded successfully');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
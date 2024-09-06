import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Optional logging of Prisma queries
});

export default prisma;
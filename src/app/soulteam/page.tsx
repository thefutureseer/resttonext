import CardsList from '@/app/components/ui/CardsList'; // Adjust if it's the correct path
import NavBar from '@/app/components/ui/NavBar';
import prisma from '../utils/prisma';
import {Users} from '@/types';

export default async function SoulTeamPage() {
  // Fetch the users on the server side
  const users: Users[] = await prisma.user.findMany();

  return (
    <div>
      <NavBar />
      <CardsList users={users} /> 
    </div>
  );
};
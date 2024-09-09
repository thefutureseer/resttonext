'use client'
import { useEffect, useState } from 'react';
import { User } from '@/types';
import CardsList from '@/app/components/ui/CardsList';
import NavBar from '@/app/components/ui/NavBar';


export default function SoulTeamPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Failed to load users');
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <NavBar />
      <CardsList users={users} />
    </div>
  );
};
'use client';
export const dynamic = 'force-dynamic';
import React, { useEffect, useState } from 'react';
import CardsList from '@/app/components/ui/CardsList';
import NavBar from '@/app/components/ui/NavBar';
import { User } from '@/types';

export default function SoulTeamPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]); // Define the type as an array of User
  const [error, setError] = useState<string | null>(null); // Error state for handling API errors

  useEffect(() => {
    // Define an async function to fetch users
    async function getUsers() {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Update the state with fetched users
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users');
      }
    }
    getUsers(); 
  }, []); // Empty dependency array to run once on mount

  if (error) {
    return <div>{error}</div>;
  }

  // Handle case where no users are found
  if (users.length === 0) {
    return (
      <div>
        <NavBar />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <CardsList users={users} /> {/* Render CardsList with the fetched users */}
    </div>
  );
};
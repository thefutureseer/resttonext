'use client'
import React, {useEffect, useState} from 'react';
import { SpiritualLeader } from '@/types';
import SpiritualLeaderCard from '@/app/components/ui/SpiritualLeaderCard';
import NavBar from '../components/ui/NavBar';


const SpiritualLeadersPage: React.FC = () => {
  
  const [leaders, setLeaders] = useState<SpiritualLeader[]>([]);

  useEffect(() => {
    const fetchSpiritualLeaders = async () => {
      try {
        const response = await fetch('api/spiritualleaders');
        if (!response.ok){
          throw new Error("error with network response");
        }
        const data = await response.json();
        setLeaders(data);
      } catch (error) {
        console.error("error fetch load users", error)      
      }
    };
    fetchSpiritualLeaders()
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">Our Spiritual Leaders</h1>
      <NavBar/>
      <SpiritualLeaderCard leaders={leaders} />
    </div>
  );
};

export default SpiritualLeadersPage;

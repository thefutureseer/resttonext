import React from 'react';
import Image from 'next/image';
import {SpiritualLeader} from "@/types";


// Define props type for SpiritualLeader
interface SpiritualLeaderCardProps {
  leaders: SpiritualLeader[];
}

const SpiritualLeaderCardsList: React.FC<SpiritualLeaderCardProps> = ({ leaders }) => {
  if (leaders.length === 0) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {leaders.map((leader) => (
        <div key={leader.id} className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
          {/* Decorative Clouds */}
          <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/clouds.png')] opacity-30 bg-cover"></div>

          {/* Card Header */}
          <div className="absolute top-0 w-full bg-gradient-to-b from-transparent to-black p-4 text-center z-10">
            <h2 className="text-white text-3xl font-bold drop-shadow-lg">{leader.name}</h2>
          </div>

          {/* Card Image */}
          <Image
            src={"https://via.placeholder.com/500x300"} // Default placeholder
            alt={leader.name || 'Spiritual Leader Image'}
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />

          {/* Info Div for bio, rating, etc. */}
          <div className="p-4 mt-32 bg-opacity-90 bg-white rounded-lg shadow-md text-center z-10">
            <p className="text-gray-800 text-lg font-semibold mb-2">{leader.bio || 'No bio available.'}</p>
            <p className="text-gray-600 text-sm">Rating: {leader.rating ? leader.rating.toFixed(1) : 'N/A'}</p>
          </div>

          {/* Decorative Border */}
          <div className="absolute inset-0 border-4 border-white border-opacity-50 rounded-lg z-10"></div>
        </div>
      ))}
    </div>
  );
};

export default SpiritualLeaderCardsList;
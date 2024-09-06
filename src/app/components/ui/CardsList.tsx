'use client';

import React from 'react';
import {Users} from '@/types';

const CardsList: React.FC<{ users: Users[] }> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {users.map((user) => (
        <div key={user.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-purple-800 to-sky-300 p-4">
            <h2 className="text-white text-2xl font-semibold">{user.name}</h2>
          </div>

          {/* Card Image */}
          <img
            src={user.profilepicture || '/path-to-image.jpg'}
            alt={user.name || user.role}
            className="w-full h-48 object-cover"
          />

          {/* Info Div for role, etc. */}
          <div className="p-4">
            <p className="text-gray-700">
              {user.role || 'Brief role or description about the user.'}
            </p>
          </div>

          {/* Card Border */}
          <div className="border-t-4 border-purple-900"></div>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
'use client'
import React from "react";
//cardDataState, loadingState, error
import { UsefetchedData } from "@/app/hooks/useFetchData";

const CardsList: React.FC = () => {
  const { cardDataState, loadingState, error} = UsefetchedData();
console.log(cardDataState);
  if (loadingState) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4">
          <h2 className="text-white text-2xl font-semibold">Spiritual Leader Name</h2>
        </div>

        {/* Card Image */}
        <img
          src="/path-to-image.jpg"
          alt="Spiritual Leader"
          className="w-full h-48 object-cover"
        />

        {/* Info Div for Bio, etc. */}
        <div className="p-4">
          <p className="text-gray-700">
            Brief bio or description about the spiritual leader. This could be a few sentences that describe their work, mission, and impact.
          </p>
        </div>

        {/* Card Border */}
        <div className="border-t-4 border-purple-500"></div>
      </div>
    </div>
  );
};

export default CardsList;
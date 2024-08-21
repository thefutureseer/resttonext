import React from "react";

const GradientBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="h-full w-full bg-gradient-to-br from-white via-[#f7e8a4] to-[#d4af37] opacity-80 blur-xl" />
    </div>
  );
};

export default GradientBackground;
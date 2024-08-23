import React from "react";

const SkyBeam: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Outer Light Beam */}
      <div className="absolute inset-0 w-[200%] h-[200%] -left-1/2 -top-1/2">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[rgba(255,255,255,0.27)] to-transparent opacity-75 transform rotate-[45deg] animate-spin"></div>
      </div>
    </div>
  );
};

export default SkyBeam;
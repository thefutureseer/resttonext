import React from "react";
import Image from "next/image";

const SplashScreen:React.FC = () => {

  return (
    <div className="splash-screen">

      <h1 className="relative w-20 h-20 flex items-center justify-center">     
 
      <div className="absolute inset-0 rounded overflow-hidden">
            <Image
              src="/logo_2024.svg"
              alt="splash screen"
              layout="fill"
              className="object-cover opacity-80 animate-spinOnce"
              priority
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-400 via-yellow-500 to-transparent animate-enhancedExplosion"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-blue-400 via-purple-500 to-transparent animate-implosion"></div>
       </h1>
          <span className="absolute top-87 text-white animate-slideLeft">Loading...</span>
    </div>
  );
};
export default SplashScreen;
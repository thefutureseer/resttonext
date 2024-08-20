import React from "react";
import Image from "next/image";

const SplashScreen:React.FC = () => {

  return (
    <div className="splash-screen">

      <h1 className="relative w-20 h-20 flex items-center justify-center">      
       <Image 
        src="/logo_2024.svg"
        alt="splash screen"
        fill
        className="opacity-50 rounded-full dark:invert animate-spinOnce"
        priority
       /><span className="absolute bottom-0">Loading..</span>
       </h1>
    </div>
  );
};
export default SplashScreen;
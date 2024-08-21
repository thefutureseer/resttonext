import React from "react";
import Image from "next/image";

const SplashScreen:React.FC = () => {

  return (
    <div className="splash-screen">

      <h1 className="relative w-20 h-20 flex items-center justify-center">      
      <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="/logo_2024.svg"
              alt="splash screen"
              layout="fill"
              className="object-cover opacity-80 dark:invert animate-spinOnce"
              priority
            />
          </div>
       </h1>
          <span className="absolute top-80 text-white animate-slideLeft">Loading...</span>
    </div>
  );
};
export default SplashScreen;
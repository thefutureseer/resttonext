import React from "react";
import Image from "next/image";

const SplashScreen:React.FC = () => {

  return (
    <div className="splash-screen">

      <h1>      
       <Image 
        src="/logo_2024.svg"
        alt="splash screen"
        width={80}
        height={80}
        className="rounded-full dark:invert animate-spinOnce"
       />  Loading..</h1>
    </div>
  );
};
export default SplashScreen;
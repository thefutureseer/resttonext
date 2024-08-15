import React from "react";
import Image from "next/image";

const SplashScreen:React.FC = () => {

  return (
    <div className="splash-screen">
      <Image 
        src="/logo_2024.svg"
        alt="splash screen"
        width={80}
        height={80}
        className="animate-spin"
      />
      <h1>  Loading..</h1>
    </div>
  );
};
export default SplashScreen;
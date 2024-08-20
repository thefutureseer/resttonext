import React from "react";
import Image from "next/image";

const Header = () => {
  return (
   <div className="flex bg-emerald-300 mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
    <div className="p-4">
      <Image 
        src='/logo_2024.svg'
        alt="Dans Levitating Logo"
        className="dark:invert"
        width={80}
        height={19}
        priority
      />
    </div>  
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 className="text-4xl font-bold text-blue-600">All souls welcome</h1>
    </div>
   </div>
  )

};

export default Header;
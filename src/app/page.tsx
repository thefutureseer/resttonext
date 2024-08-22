import React from "react";
import NavBar from "@/app/components/ui/NavBar";
import Header from "./components/ui/Header";
import "../styles/globals.css";
import "../styles/page.css";

export default function Home() {
  return (
    <div className="bg-emerald-300 flex flex-col">
      <NavBar/>
      <Header/>
      <div className="absolute inset-0 z-[-1]">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-green-900 after:dark:via-[#016f1d] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      </div>
      <div className="gradient-bg">
      <div className="relative h-[300px] w-[300px] before:absolute before:h-full before:w-full before:rounded-full before:bg-gradient-radial before:from-green-200 before:via-green-300 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[180px] after:translate-x-1/4 after:rounded-full after:bg-gradient-conic after:from-green-200 after:via-green-300 after:to-transparent after:blur-2xl after:content-[''] animate-spinOnce"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-400 via-yellow-500 to-transparent animate-enhancedExplosion"></div>
      {/* <div className="absolute inset-0 rounded-full bg-gradient-radial from-red-400 via-yellow-500 to-transparent animate-explosion"></div> */}
      </div>
    </div>
  );
}
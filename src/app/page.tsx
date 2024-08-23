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
      </div>
      <div className="gradient-bg">
      <div className="relative h-[300px] w-[300px] before:absolute before:h-full before:w-full before:rounded-full before:bg-gradient-radial before:from-green-200 before:via-green-300 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:h-[180px] after:w-[180px] after:translate-x-1/4 after:rounded-full after:bg-gradient-conic after:from-green-700 after:via-green-300 after:to-transparent after:blur-2xl after:content-[''] animate-spinOnce"></div>
      </div>
    </div>
  );
}
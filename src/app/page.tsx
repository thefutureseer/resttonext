import React from "react";
import NavBar from "@/app/components/ui/NavBar";
import Header from "./components/ui/Header";
import "../styles/globals.css";

export default function Home() {
  return (
    <div className="bg-emerald-300 flex flex-col">
      <NavBar/>
      <Header/>
      <div className="bg-gradient-to-b from-emerald-400 to-emerald-700 min-h-screen flex flex-col"></div>
    </div>
  );
}
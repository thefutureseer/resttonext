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
      <div className="gradient-bg"></div>
    </div>
  );
}
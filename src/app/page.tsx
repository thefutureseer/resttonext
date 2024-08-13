import React from "react";
import NavBar from "@/components/NavBar";
import SignInForm from "@/components/SignInForm";
import "../styles/globals.css";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <SignInForm/>
    </div>);
}
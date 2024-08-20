'use client'
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/splashScreen";
// Global styles.
import "../styles/globals.css";

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Simulate a loading time for the splash screen:
  const timer = setTimeout(() => {
    console.log("Splash screen done. Moving to layout.");
    setIsLoading(false);
  }, 500); // 500ms delay for splash screen

  return () => clearTimeout(timer); // Clean up the timer on unmount
}, []);
 return isLoading? <SplashScreen/>: <>{children}</>;
}

// RootLayout component that wraps the entire application.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-gray-100">
         <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
};
'use client'
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/splashScreen";
// Global styles.
import "../styles/globals.css";

// RootLayout component that wraps the entire application.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time for the splash screen:
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500ms delay for splash screen
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Wrapping children with SessionProvider to manage authentication sessions */}
        {/* <SessionProvider> */}
          {isLoading ? <SplashScreen /> : children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
};
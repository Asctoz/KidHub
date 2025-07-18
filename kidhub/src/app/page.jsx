"use client";

import HighlightPage from "@/components/HighlightPage";
import Navbar from "@/components/Navbar.jsx";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HighlightPage /> 
    </div>
  );
}

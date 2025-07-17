"use client";

import HighlightPage from "@/components/HighlightPage";
import Navbar from "@/components/Navbar.jsx";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Navbar overlays the content */}
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      
      {/* Hero content sits underneath */}
      <HighlightPage className="pt-[64px] relative" /> {/* Adjust pt-[64px] to match navbar height */}
    </div>
  );
}

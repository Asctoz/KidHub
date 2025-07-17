"use client";

import HighlightPage from "@/components/HighlightPage";
import Navbar from "@/components/Navbar.jsx"

export default function Home() {
  return (
    <div className="relative">
      <HighlightPage className="absolute" />
      <Navbar className="absolute top-1" />

    </div>

  );
}

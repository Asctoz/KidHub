"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar.jsx";
import HighlightPage from "@/components/HighlightPage.jsx";
import Loader from "@/components/Loader.jsx";
// import Card from "@/components/Card.jsx";
import { AnimatedPinCard, PinContainer } from "@/components/3dPin";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 500); // delay for fade-in if needed
      return () => clearTimeout(contentTimer);
    }, 2000); // 2 second loader

    return () => clearTimeout(loaderTimer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {isLoading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
          <Loader />
        </div>
      ) : (
        showContent && (
          <>
            <Navbar />
            <HighlightPage />
            {/* <Card /> */}
            <div className="min-h-screen px-4 py-8 bg-black text-white">
              <h1 className="text-5xl font-bold mb-8 text-center">
                Our Projects
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 justify-items-center">
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
                <AnimatedPinCard
                  title="DeCram AI"
                  description="DeCram AI is an AI-powered student platform"
                  link="https://www.decram.me"
                  img="/assets/Decram.jpg"
                />
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}

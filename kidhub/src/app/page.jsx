"use client";

import { useState, useEffect } from "react";
import HighlightPage from "@/components/HighlightPage";
import Navbar from "@/components/Navbar.jsx";
import Loader from "@/components/loader.jsx";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   const loaderTimer = setTimeout(() => {
  //     setIsLoading(false);
  //     const contentTimer = setTimeout(() => {
  //       setShowContent(true);
  //     }, 500);
  //     return () => clearTimeout(contentTimer);
  //   }, 3500);

  //   return () => clearTimeout(loaderTimer);
  // }, []);

  return (
    // <div className="relative min-h-screen">
    //   {isLoading ? (
    //     <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
    //       <Loader />
    //     </div>
    //   ) : (
    //     showContent && (
          <>
            <Navbar />
            <HighlightPage />
          </>
        )}
//       )
//     </div>
//   );
// }
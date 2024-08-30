"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleMouseEnter = useCallback(() => setShowConfetti(true), []);
  const handleMouseLeave = useCallback(() => setShowConfetti(false), []);

  return (
    <div className="flex flex-col min-h-screen bg-[#509EE3]">
      <main className="flex flex-col flex-1 w-full h-full items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4 pb-3 text-white">
          Metabase Sample Embed
        </h1>
        <div 
          className="h-screen w-full px-10 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showConfetti && <Confetti />}
          <iframe
            src="http://localhost:3000/public/dashboard/0dc6f56d-2d6b-498c-b916-e764d4a4dea5"
            className="flex-1 w-full h-full border-none rounded-lg"
            allowTransparency
            title="Metabase Dashboard"
          ></iframe>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import Image from "next/image";
import BottomBar from "@/components/bottom-bar";
import TypedEffect from "@/components/infinite-type";

const PortfolioApp = () => {
  useEffect(() => {
    // Access localStorage inside useEffect to ensure it's running on the client
    localStorage.setItem("path", "home");
  }, []);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const imageCSS = "hover:cursor-pointer hover:-translate-y-1"

  const expertiseValues = [
    "Full-Stack Development.",
    "System Design.",
    "Problem Solving.",
  ]

  return (
    <div className="h-screen bg-deepPlum">
      <div className="h-full w-1/2 text-check flex flex-col justify-center bg-mustardYellow">
        <div className="mx-auto">
          <div className="flex space-x-1">
            <p className="text-check text-3xl font-bold animate-fly-left">Hi there!</p>
            <p className="text-3xl font-bold animate-fly-right">It&apos;s me</p>
          </div>
          <p className="text-deepPlum text-4xl font-extrabold animate-fly-up">Chaitanya Lanke</p>
          <p className="text-2xl font-bold animate-fly-up">I&apos;m a Software Engineer with</p>
          <p className="text-2xl font-bold animate-fly-up">expertise in <TypedEffect showStrings={expertiseValues} /></p>
        </div>
        <div className="mx-auto mt-4 flex gap-16 justify-evenly animate-fly-up">
          <div>
            <Image
              src={`${basePath}/images/icons/email.svg`}
              alt="Failed to Load"
              height={30}
              width={30}
              className={imageCSS}
            />
          </div>
          <div>
            <Image
              src={`${basePath}/images/icons/linkedin.svg`}
              alt="Failed to Load"
              height={25}
              width={25}
              onClick={() => window.location.href="https://www.linkedin.com/in/chaitanya-lanke-64b597195/"}
              className={imageCSS}
            />
          </div>
          <div>
            <Image
              src={`${basePath}/images/icons/github.svg`}
              alt="Failed to Load"
              height={25}
              width={25}
              className={imageCSS}
            />
          </div>
          <div>
            <Image
              src={`${basePath}/images/icons/instagram.svg`}
              alt="Failed to Load"
              height={25}
              width={25}
              className={imageCSS}
            />
          </div>
          </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default PortfolioApp;

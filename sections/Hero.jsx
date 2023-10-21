"use client";
import React from "react";
import Clock from "./Clock";
import Image from "next/image";
import heroBG from "../public/hero/heroBg.webp";
import tegathonLogo from "../public/hero/tegathonLogo2.webp";

const Hero = () => {
  return (
    // Hero Section
    <section id="home" className="w-full -z-50 bg-black relative">
      {/* Background Img */}
      <div className="absolute -z-10 w-full h-full">
        <Image
          src={heroBG}
          alt="hero"
          className="w-full object-cover"
          width={1000}
          height={1000}
        />
      </div>
      {/* Grid Container */}
      <div className="container mx-auto grid px-5 md:py-52 py-10 gap-5 md:grid-cols-2">
        {/* Hero img, text, and button */}
        <div className="md:space-y-12 space-y-4">
          <div className="flex w-full items-center justify-center">
            <Image
              src={tegathonLogo}
              alt="tegathon logo"
              width={800}
            />
          </div>
          <div className="md:space-y-12 space-y-4 md:px-10 ">
            <p className="text-white text-center md:text-left md:text-sm text-xs leading-relaxed">
              At Tegathon, we're all about having a blast with
              technology, computer coding, and video games. It's a
              3-day event where you can learn, compete, and make new
              friends. Don't miss out!
            </p>
            <div className="flex items-center w-full justify-center md:justify-start">
              <button className="bg-yellow-400 text-zinc-800 text-xs md:p-5 px-2 py-4 font-semibold rounded-3xl">
                Register Now
              </button>
            </div>
          </div>
        </div>
        {/* Hero Countdown */}
        <div className="flex items-center justify-center">
          <div className="p-4  rounded-2xl text-center relative -mb-7 backdrop-blur-md text-yellow-400 font-bold bg-black/50">
            <Clock hours={12} minutes={30} seconds={45} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

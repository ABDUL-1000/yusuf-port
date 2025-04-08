import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/SportLight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateeEffect";
import { cn } from "@/lib/utils";
import { div } from "motion/react-client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import TypingText from "@/components/ui/TextWriting";
import Image from "next/image";
import pics from '@/public/PICS.png'
import SocialMedia from "@/components/ui/SocialMedia";

const Hero = () => {
  return (
    <div className="">
      <div className="  h-screen w-full rounded-md flex items-center justify-center md:items-center md:justify-center antialiased bg-grid-white/[1] relative overflow-hidden">
        <Spotlight />

        <div className="top-0 left-0  dark:bg-grid-white/[0.0001] flex h-screen w-full items-center justify-center  dark:bg-[#000319] absolute">
          {/* <div
        className={cn(
          "absolute inset-0",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      /> */}
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none relative inset-0 flex items-center justify-center bg-[#000319] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319] " />
        </div>
        <div className="relative lg:flex lg:flex-row-reverse md:flex md:flex-row-reverse  lg:">
          <div className="flex flex-col justify-center items-center lg:w-[30%]  m-auto">
          <div className="relative lg:w-75 lg:h-70 w-45 h-40 mb-2">
        {/* Rotating circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border-t-4 border-blue-950 rounded-full animate-loading-bar blur-sm"></div>
        </div>

        {/* Profile image */}
        <Image
          src={pics} 
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-white relative z-10"
        />
      </div>
          </div>

          <div className=" md:max-w-2xl lg:max-w- flex items-center justify-center flex-col lg:flex lg:items-start lg:p-6 ">
            <TextGenerateEffect
              className=" text-[30px] text-center lg:text-start  md:text-3xl lg:text-6xl"
              words="Hey there, I'm
Yusuff Abdulkareem Abdullateef"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <TypingText />
            </motion.div>
            <div className=" flex lg:flex-row flex-col items-center justify-center">
            <a href="#about">
           
              <MagicButton
                title="show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <SocialMedia/>
            </div>
          </div>
           
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

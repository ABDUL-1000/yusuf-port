import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/SportLight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateeEffect";
import { cn } from "@/lib/utils";

import React from "react";
import { FaDownload, FaLocationArrow, FaShower } from "react-icons/fa6";
import { motion } from "framer-motion";
import TypingText from "@/components/ui/TextWriting";
import Image from "next/image";
import pics from '@/public/PICS.png'
import SocialMedia from "@/components/ui/SocialMedia";
import { Button, Button1 } from "@/components/ui/MvvingBar";


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
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center lg:w-[30%]  m-auto">
          <div className="relative lg:w-75 lg:h-75 w-45 h-40 mb-2">
        {/* Rotating circle */}
       

        {/* Profile image */}
        <Button1

        borderRadius="2rem"
        className="bg-white dark:bg-slate-900 rounded-full text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <Image
          src={pics} 
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-white relative z-10"
        />
        </Button1>
      </div>
          </motion.div>


          <div className=" md:max-w-2xl lg:max-w- flex items-center justify-center flex-col lg:flex lg:items-start lg:p-6 ">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
  
            >
             <div className=" md:max-w-2xl lg:max-w- flex items-center justify-center flex-col lg:flex lg:items-start lg: ">
            <TextGenerateEffect
              className=" text-[30px] text-center lg:text-start  md:text-2xl lg:text-5xl"
              words="Hey there, I'm
Yusuff Abdulkareem Abdullateef"
            />
            </div>
              </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <TypingText />
            </motion.div>
            <motion.div   initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} className=" flex lg:flex-row flex-col items-center justify-center">
            <a href="#about">
           
              <MagicButton
                title="show my work"
               
                position="right"
              />
            </a>
            <SocialMedia/>
            </motion.div>
          </div>
           
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

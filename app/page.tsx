'use client'
import { useState } from "react";

import "@/app/globals.css";
import Hero from "@/component/Hero";


import Grid from "@/components/Grid";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Clients from "@/components/Clients";

import { AnimatedPinDemo } from "@/components/AnimatedCard";

import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";


export default function Home() {
 
  return (
 <main className="relative bg-[#000319] flex items-center justify-center overflow-clip p-2 flex-col  mx-auto sm:px-10">
  <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/>
    <Hero/>
    <Grid/>
    <Clients/>
    <Experience/>
    <Approach/>
    <Footer/>
  </div>

 </main>
  );
}

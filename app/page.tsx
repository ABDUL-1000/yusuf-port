'use client'
import { useState } from "react";

import "@/app/globals.css";
import Hero from "@/component/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";


export default function Home() {
 
  return (
 <main className="relative bg-[#000319] flex items-center justify-center p-2 flex-col overflow-hidden mx-auto sm:px-10">
  <div className="max-w-7xl w-full">
    <FloatingNav navItems={[{name: "Home", link: "/", icon: <FaHome/>}]}/>
    <Hero/>
    <Grid/>
  </div>

 </main>
  );
}

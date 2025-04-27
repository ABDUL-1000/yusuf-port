'use client'
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

import "@/app/globals.css";
import Hero from "@/component/Hero";
import Project from "@/component/Project";
import Journey from "@/component/Journey";
import Voice from "@/component/Voice";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <motion.div
      className="p-2"
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1 }} // 1 second duration
    >
      <Hero />
      <Project />
      <Journey />
      <Voice />
      <Footer />
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />

      {/* Horizontal pink static lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="h-[2px] w-full bg-pink-500/10"
            style={{
              position: "absolute",
              top: `${10 + index * 4}%`, // Adjust line spacing for better distribution
            }}
          />
        ))}
      </div>

      {/* Glowing animated lines (wire burning effect) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="h-[2px] w-1/4 bg-gradient-to-r from-white via-pink-500 to-transparent shadow-[0px_0px_10px_rgba(255,0,128,0.8)]"
            initial={{ x: "-100%" }} // Start well outside the viewport
            animate={{ x: "100vw" }} // Move fully across the viewport
            transition={{
              duration: 8, // Animation duration
              repeat: Infinity, // Infinite loop
              delay: index * 0.3, // Staggered delay for cascading effect
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: `${10 + index * 4}%`, // Align with static pink lines
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              The Future of AI
            </span>
            <br />
            Is Here
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
            with our cutting-edge processing technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-purple-500/50 text-white text-lg font-medium hover:bg-purple-500/10 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

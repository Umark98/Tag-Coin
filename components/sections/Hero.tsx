"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Define initial positions for the dots (start, middle, end)
  const dotInitialPositions = ["0vw", "15vw", "30vw", "45vw", "60vw", "75vw", "90vw"]; // More staggered positions

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />

      {/* Horizontal pink static lines (thinner and faded) */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="h-[2px] w-full bg-pink-500/10" // Thinner and reduced opacity
            style={{
              position: "absolute",
              top: `${15 + index * 12}%`, // Adjust line spacing for 7 lines
            }}
          />
        ))}
      </div>

      {/* Shining dots moving along the lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={index}
            className="w-[5px] h-[5px] bg-white/60 rounded-full shadow-[0px_0px_20px_4px_rgba(255,255,255,0.5)]" // Smaller and more opaque dots with glow
            initial={{ x: dotInitialPositions[index] }} // Start at staggered positions in vw
            animate={{
              x: ["0vw", "100vw"], // Move from start to end of viewport width
            }}
            transition={{
              duration: 6, // Adjusted animation speed for smoother effect
              repeat: Infinity,
              repeatType: "reverse", // Ensures the dots reverse back after reaching the end
              delay: index * 0.3, // Staggered delay for each dot
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: `${15 + index * 12}%`, // Align dots with horizontal lines
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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

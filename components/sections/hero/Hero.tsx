"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  // Define initial positions for the dots (start, middle, end)
  const dotInitialPositions = ["0%", "25%", "50%", "75%", "100%"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Horizontal gray static lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-[2px] w-full bg-white"
            style={{
              position: "absolute",
              top: `${20 + index * 15}%`, // Adjust line spacing
            }}
          />
        ))}
      </div>

      {/* Shining dots moving along the lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="w-[8px] h-[8px] bg-purple-500 rounded-full shadow-[0px_0px_10px_4px_rgba(128,0,128,0.3)]"
            initial={{ x: dotInitialPositions[index] }}
            animate={{ x: "100%" }}
            transition={{
              duration: 8, // Animation speed
              repeat: Infinity,
              delay: index * 1, // Staggered delay for each dot
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: `${20 + index * 15}%`, // Align dots with horizontal lines
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
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              The Future of AI
            </span>
            <br />
            Is Here
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
            with our cutting-edge processing technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-gray-600 text-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-purple-500/50 text-purple-600 text-lg font-medium hover:bg-purple-100 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

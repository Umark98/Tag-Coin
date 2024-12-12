"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { fadeInUp } from "@/lib/animations";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeInUp} className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            <GradientText>The Future of AI</GradientText>
            <br />
            Is Here
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
            with our cutting-edge parallel processing technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </motion.div>
      </div>

      <ParticleBackground />
    </section>
  );
};
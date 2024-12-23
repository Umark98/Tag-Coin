"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { FeatureCard } from "./FeatureCard";
import { features } from "./featureData";
import { fadeInUp } from "@/lib/animations";

export const Features = () => {
  return (
    <Section id="features">
      <div className="text-center mb-16">
        <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-4">
          <GradientText>Powerful Features</GradientText>
        </motion.h2>
        <p className="text-gray-600 text-xl">
          Discover what makes our AI technology stand out
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </Section>
  );
};
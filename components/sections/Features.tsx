"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "State-of-the-art machine learning models trained on diverse datasets.",
  },
  {
    icon: Cpu,
    title: "Parallel Processing",
    description: "Lightning-fast computations with our distributed processing architecture.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Enterprise-grade security with end-to-end encryption.",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Instant insights with our real-time processing capabilities.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Powerful Features
            </span>
          </motion.h2>
          <p className="text-gray-400 text-xl">
            Discover what makes our AI technology stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-b from-purple-900/20 to-transparent p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
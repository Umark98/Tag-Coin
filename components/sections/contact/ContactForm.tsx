"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ContactForm = () => (
  <motion.form
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="space-y-6"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        label="Name"
        type="text"
        placeholder="John Doe"
      />
      <FormField
        label="Email"
        type="email"
        placeholder="john@example.com"
      />
    </div>
    <FormField
      label="Message"
      type="textarea"
      placeholder="Your message..."
    />
    <Button type="submit" className="w-full group">
      Send Message
      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  </motion.form>
);
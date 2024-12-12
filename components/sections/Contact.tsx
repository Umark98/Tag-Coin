"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 text-xl">
            Ready to transform your business with AI? Contact us today.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
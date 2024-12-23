import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content (Text Section) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Start from the left
            whileInView={{ opacity: 1, x: 0 }} // Animate to the normal position
            viewport={{ once: false }} // Ensure it animates every time it enters the viewport
            transition={{
              duration: 1, // Animation duration for text
              ease: "easeInOut", // Smooth easing for transition
              delay: 0.2, // Delay for animation start
            }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                About Our Technology
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We're pioneering the future of artificial intelligence with our
              revolutionary parallel processing technology. Our platform enables
              businesses to harness the full potential of AI while maintaining
              security and scalability.
            </p>
            <div className="space-y-4">
              {[
                "Advanced neural networks",
                "Distributed computing architecture",
                "Enterprise-grade security",
                "24/7 expert support",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content (Video Section) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Start from the right
            whileInView={{ opacity: 1, x: 0 }} // Animate to the normal position
            viewport={{ once: false }} // Ensure it animates every time it enters the viewport
            transition={{
              duration: 1.5, // Longer animation duration for video
              ease: "easeInOut", // Smooth easing for transition
              delay: 0.6, // Increased delay for video animation
            }}
            className="relative"
          >
            <div className="w-full h-48 sm:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              >
                <source src="/Background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

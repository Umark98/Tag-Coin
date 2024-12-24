import { motion } from "framer-motion"; 
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-200" />

      {/* Horizontal light lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="h-[2px] w-full bg-purple-500/10"
            style={{
              position: "absolute",
              top: `${10 + index * 4}%`, // Adjust line spacing for better distribution
            }}
          />
        ))}
      </div>

      {/* Glowing animated lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="h-[2px] w-1/4 bg-gradient-to-r from-purple-400 via-pink-300 to-transparent shadow-[0px_0px_10px_rgba(192,128,255,0.6)]"
            initial={{ x: "-100%" }}
            animate={{ x: "100vw" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: `${10 + index * 4}%`,
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              The Future of AI
            </span>
            <br />
            Is Here
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business
            with our cutting-edge processing technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-gray-600 text-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full border border-purple-300 text-gray-700 text-lg font-medium hover:bg-purple-100 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;






// "use client"; 
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background GIF */}
//       <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.gif)' }} />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 mt-5 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2 }}
//           className="space-y-8"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold">
//             <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
//               The Future of AI
//             </span>
//             <br />
//             Is Here
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
//             Harness the power of artificial intelligence to transform your business
//             with our cutting-edge processing technology.
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-gray-600 text-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group">
//               Get Started
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="px-8 py-4 rounded-full border border-purple-500/50 text-gray-600 text-lg font-medium hover:bg-purple-500/10 transition-colors">
//               Learn More
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

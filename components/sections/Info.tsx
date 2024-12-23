import React from "react";  
import { Brain } from "lucide-react";

const Info = () => {
  return (
    <div className="container mx-auto p-4 text-center bg-white">
      {/* Title with Logo */}
      <div className="flex justify-center items-center mb-4">
        <span className="text-xl font-bold mr-4">
          <h1 className="text-6xl text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
            20x Faster with
          </h1>
        </span>
        <span className="flex items-center">
          <Brain className="h-8 w-8 text-purple-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            TAG COIN
          </span>
        </span>
      </div>

      {/* Text Content with Glowing Divider */}
      <div className="flex justify-center items-center text-xl mb-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">20x</h1>
          <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Faster Computation</p>
        </div>
        <div className="relative mx-4 w-[1px] h-7 bg-pink-400 animate-glow"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">30s</h1>
          <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Typical Task Completion Time</p>
        </div>
        <div className="relative mx-4 w-[1px] h-7 bg-pink-400 animate-glow"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">10min</h1>
          <p className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Traditional Completion Time</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-xs text-gray-600">
        ParallelAl's innovative execution model delivers unparalleled processing
        speeds, slashing computation times by up to<br /> 20x. A task that would
        typically take 10 minutes can now be completed in 30 seconds.
      </p>

      {/* Column Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {/* Image 1 */}
        <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg border-t-4 border-l border-r border-b border-pink-400">
          <img
            src="./automatic.svg"
            alt="Automatic Parallelization"
            className="w-40 h-40 object-cover mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-600">Automatic Parallelization</h1>
          <p className="text-lg text-gray-600 text-center">
            Every operation capable of running in parallel does seamlessly, without explicit instructions.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg border-t-4 border-l border-r border-b border-pink-400">
          <img
            src="./perfomance.svg"
            alt="Maximized Performance"
            className="w-40 h-40 object-cover mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-600">Maximized Performance</h1>
          <p className="text-lg text-gray-600 text-center">
            The full potential of both CPU and GPU cores, solving problems in a fraction of the time.
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg border-t-4 border-l border-r border-b border-pink-400">
          <img
            src="./intuitive-coding.svg"
            alt="Intuitive Coding"
            className="w-40 h-40 object-cover mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-600">Intuitive Coding</h1>
          <p className="text-lg text-gray-600 text-center">
            Write high-level, Python-like code without the complexities of parallel programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

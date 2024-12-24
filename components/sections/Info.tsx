import React from "react";  
import { Brain } from "lucide-react";

const Info = () => {
  return (
    <div className="container mx-auto p-6 text-center ">
      {/* Title with Logo */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0">
        <span className="text-4xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
          20x Faster with
        </span>
        <span className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
            TAG COIN
          </span>
        </span>
      </div>

      {/* Text Content with Glowing Divider */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-xl mb-8 space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">20x</h1>
          <p className="text-lg font-bold text-gray-700">Faster Computation</p>
        </div>
        <div className="relative mx-4 w-[2px] h-8 bg-pink-400 animate-pulse"></div>
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">30s</h1>
          <p className="text-lg font-bold text-gray-700">Typical Task Completion Time</p>
        </div>
        <div className="relative mx-4 w-[2px] h-8 bg-pink-400 animate-pulse"></div>
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">10min</h1>
          <p className="text-lg font-bold text-gray-700">Traditional Completion Time</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm sm:text-base text-gray-600">
        ParallelAl's innovative execution model delivers unparalleled processing
        speeds, slashing computation times by up to 20x. A task that would
        typically take 10 minutes can now be completed in 30 seconds.
      </p>

      {/* Column Layout with Info Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* Image 1 */}
        <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-500">
          <img
            src="./automatic.svg"
            alt="Automatic Parallelization"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-700">Automatic Parallelization</h1>
          <p className="text-base text-gray-600 text-center">
            Every operation capable of running in parallel does seamlessly, without explicit instructions.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-500">
          <img
            src="./perfomance.svg"
            alt="Maximized Performance"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-700">Maximized Performance</h1>
          <p className="text-base text-gray-600 text-center">
            The full potential of both CPU and GPU cores, solving problems in a fraction of the time.
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-500">
          <img
            src="./intuitive-coding.svg"
            alt="Intuitive Coding"
            className="w-32 h-32 sm:w-40 sm:h-40 object-cover mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-700">Intuitive Coding</h1>
          <p className="text-base text-gray-600 text-center">
            Write high-level, Python-like code without the complexities of parallel programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

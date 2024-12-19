import React from "react"; 
import { Menu, X, Brain } from "lucide-react";

const Info = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      {/* Title with Logo */}
      <div className="flex justify-center items-center mb-4">
        <span className="text-xl font-bold mr-4">
          <h1 className="text-4xl text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
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
          <h1 className="text-3xl bg-gradient-to-r text-purple-400 bg-clip-text">20x</h1>
          <p className="text-lg text-purple-400">Faster Computation</p>
        </div>
        <div className="relative mx-4 w-[1px] h-7 bg-pink-400 animate-glow"></div>
        <div className="text-center">
          <h1 className="text-3xl text-purple-400">30s</h1>
          <p className="text-lg text-purple-400">Typical Task Completion Time</p>
        </div>
        <div className="relative mx-4 w-[1px] h-7 bg-pink-400 animate-glow"></div>
        <div className="text-center">
          <h1 className="text-3xl text-purple-400">10min</h1>
          <p className="text-lg text-purple-400">Traditional Completion Time</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-xs text-gray-300">
        ParallelAl's innovative execution model delivers unparalleled processing
        speeds, slashing computation times by up to<br /> 20x. A task that would
        typically take 10 minutes can now be completed in 30 seconds.
      </p>

      {/* Column Layout */}
      <div className="flex flex-row items-center space-y-6 mt-8">
        <div className="w-full max-w-md flex flex-col items-center justify-center border  p-6 rounded-lg shadow-lg">
          <img
            src="./automatic.svg"
            alt="Image 1"
            className="w-40 h-40 object-cover  mb-4"
          />
          <h1> Automatic Parallelization</h1>
          <p className="text-lg text-white text-center">
          Every operation capable of running in parallel does seamlessly, without explicit instructions
          </p>
        </div>

        <div className="w-full max-w-md flex flex-col items-center justify-center border  p-6 rounded-lg shadow-lg">
          <img
            src="./perfomance.svg"
            alt="Image 1"
            className="w-40 h-40 object-cover  mb-4"
          />
          <h1>  Maximized Performance</h1>
          <p className="text-lg text-white text-center">
            The full potential of both CPU and GPU cores, solving problems in a fraction of the time.
          </p>
        </div>
        
        <div className="w-full max-w-md flex flex-col items-center justify-center border  p-6 rounded-lg shadow-lg">
          <img
            src="./intuitive-coding.svg"
            alt="Image 1"
            className="w-40 h-40 object-cover  mb-4"
          />
          <h1> Intuitive Coding</h1>
          <p className="text-lg text-white text-center">
            Write high-level, Python-like code without the complexities of parallel programming
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

import { useState } from "react";  
import { motion } from "framer-motion";

const cryptoCurrencies = [
  { name: "Bitcoin", symbol: "BTC", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="50" fill="#f7931a"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">BTC</text>
    </svg>
  )},
  { name: "Ethereum", symbol: "ETH", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="50" fill="#3c3c3d"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">ETH</text>
    </svg>
  )},
  { name: "Ripple", symbol: "XRP", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30">
      <circle cx="50" cy="50" r="50" fill="#00a9cc"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">XRP</text>
    </svg>
  )},
  { name: "Litecoin", symbol: "LTC", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="50" fill="#b0b0b0"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">LTC</text>
    </svg>
  )},
  { name: "Cardano", symbol: "ADA", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="50" fill="#0033ad"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">ADA</text>
    </svg>
  )},
  { name: "Dogecoin", symbol: "DOGE", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="50" fill="#c2a633"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">DOGE</text>
    </svg>
  )},
  { name: "Solana", symbol: "SOL", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30" height="30">
      <circle cx="50" cy="50" r="50" fill="#00df9a"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">SOL</text>
    </svg>
  )},
  { name: "Chainlink", symbol: "LINK", svg: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="50" fill="#3751ff"/>
      <text x="50%" y="50%" fontSize="20" fill="white" textAnchor="middle" dy=".3em">LINK</text>
    </svg>
  )},
];

export const CryptoSlider = () => {
  const [hovered, setHovered] = useState(false);

  const slideAnimation = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      className="relative bg-white text-gray overflow-hidden "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full bg-white text-gray overflow-hidden mt-10">
        <motion.div
          {...slideAnimation}
          animate={hovered ? {} : slideAnimation.animate}
          className="flex space-x-8"
        >
          {[...cryptoCurrencies, ...cryptoCurrencies].map((crypto, index) => (
            <div
              key={index}
              className="flex items-center justify-center  min-w-[150px] h-10 px-6 py-2 border-2 border-purple-400 text-gray-600 rounded-full text-sm font-bold uppercase tracking-wide hover:text-gray-600 hover:bg-purple-400 transition-all duration-300"
            >
              {crypto.svg}
              <span className="ml-2 text-gray">{crypto.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

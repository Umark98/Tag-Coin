import { useState } from "react";
import { motion } from "framer-motion";

// SVGs for the cryptocurrencies
const cryptoCurrencies = [
  { name: "Bitcoin", symbol: "BTC", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-yellow-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v2h2V7zm-3 3v2h4V10h-4zm0 3v6h4v-6h-4z" />
      </svg>
    )
  },
  { name: "Ethereum", symbol: "ETH", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-blue-500">
        <path d="M12 2L1 21h22L12 2zm0 12.7l-4.7-2.7L12 7l4.7 7.9L12 14.7z" />
      </svg>
    )
  },
  { name: "Ripple", symbol: "XRP", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-blue-400">
        <path d="M12 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 10c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z" />
      </svg>
    )
  },
  { name: "Litecoin", symbol: "LTC", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-gray-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h-2v2h2V7zm-3 3v2h4V10h-4zm0 3v6h4v-6h-4z" />
      </svg>
    )
  },
  { name: "Cardano", symbol: "ADA", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-purple-700">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v2h2V7zm-3 3v2h4V10h-4zm0 3v6h4v-6h-4z" />
      </svg>
    )
  },
  { name: "Polkadot", symbol: "DOT", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-pink-500">
        <path d="M12 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 10c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z" />
      </svg>
    )
  },
  { name: "Dogecoin", symbol: "DOGE", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-yellow-400">
        <path d="M12 2c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 10c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7 3.13-7 7-7z" />
      </svg>
    )
  },
  { name: "Solana", symbol: "SOL", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-green-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v2h2V7zm-3 3v2h4V10h-4zm0 3v6h4v-6h-4z" />
      </svg>
    )
  },
  { name: "Chainlink", symbol: "LINK", icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-indigo-500">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v2h2V7zm-3 3v2h4V10h-4zm0 3v6h4v-6h-4z" />
      </svg>
    )
  },
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
      className="relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
        Featured Cryptocurrencies
      </h2>

      <div className="w-full overflow-hidden">
        <motion.div
          {...slideAnimation}
          animate={hovered ? {} : slideAnimation.animate}
          className="flex space-x-12"
        >
          {[...cryptoCurrencies, ...cryptoCurrencies].map((crypto, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[200px] p-4 border border-gray-700 rounded-xl"
            >
              <div className="mb-4">{crypto.icon}</div>
              <h3 className="text-lg font-semibold text-black">{crypto.name}</h3>
              <p className="text-sm text-purple-400">{crypto.symbol}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

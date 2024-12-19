import { useState } from "react";
import { motion } from "framer-motion";

const cryptoCurrencies = [
  { name: "Bitcoin", symbol: "BTC" },
  { name: "Ethereum", symbol: "ETH" },
  { name: "Ripple", symbol: "XRP" },
  { name: "Litecoin", symbol: "LTC" },
  { name: "Cardano", symbol: "ADA" },
  { name: "Polkadot", symbol: "DOT" },
  { name: "Dogecoin", symbol: "DOGE" },
  { name: "Solana", symbol: "SOL" },
  { name: "Chainlink", symbol: "LINK" },
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
      className="relative overflow-hidden opacity-40"
      onMouseEnter={() => setHovered(false)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full overflow-hidden ">
        <motion.div
          {...slideAnimation}
          animate={hovered ? {} : slideAnimation.animate}
          className="flex space-x-8"
        >
          {[...cryptoCurrencies, ...cryptoCurrencies].map((crypto, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] h-12 px-6 py-2 border-2 border-purple-400 text-white rounded-full text-sm font-bold uppercase tracking-wide hover:text-white hover:bg-purple-400 transition-all duration-300"
            >
              {crypto.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

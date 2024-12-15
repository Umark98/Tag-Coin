"use client";

import { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const WalletButton = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet!");
    }
  };

  return (
    <Button
      variant="primary"
      onClick={connectWallet}
      className="flex items-center gap-2"
    >
      <Wallet className="w-4 h-4" />
      {walletAddress ? (
        <span>
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </span>
      ) : (
        "Connect Wallet"
      )}
    </Button>
  );
};
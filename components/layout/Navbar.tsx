"use client";

import { useState } from "react";
import { Menu, X, Brain } from "lucide-react";
import Link from "next/link";
import { NavLink, MobileNavLink } from "./NavLinks";
import { Button } from "@/components/ui/Button";
import { AuthModal } from "@/components/auth/AuthModal";
import { WalletButton } from "@/components/wallet/WalletButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white text-black backdrop-blur-md z-50 border-b border-gray-200 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                TAG COIN
              </span>
            </Link>
          </div>

          <div className="hidden md:flex text-black md:items-center md:space-x-4">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <WalletButton />
            <Button
              variant="primary"
              onClick={() => setIsAuthModalOpen(true)}
              className="text-black"
            >
              Sign In
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-purple-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="pt-2">
              <WalletButton />
            </div>
            <Button
              variant="primary"
              onClick={() => {
                setIsAuthModalOpen(true);
                setIsOpen(false);
              }}
              className="w-full mt-2 text-black"
            >
              Sign In
            </Button>
          </div>
        </div>
      )}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </nav>
  );
};

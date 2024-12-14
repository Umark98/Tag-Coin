"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);
    // Add authentication logic here
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      aria-labelledby="auth-modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-black/90 p-8 rounded-2xl border border-purple-500/20 w-full max-w-md relative"
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
          aria-label="Close authentication modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2
          id="auth-modal-title"
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
          )}

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white"
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {!isLogin && (
            <div>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 text-white capitalize"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          <Button type="submit" variant="primary" className="w-full">
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:text-purple-300"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </motion.div>
  );
};

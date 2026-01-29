import React, { useState } from "react";
import { motion } from "framer-motion";
import {Mail, Instagram, Facebook, Twitter} from 'lucide-react';


function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      setError("");
      
      try {
        await lumi.entities.signups.create({
          email,
          signupDate: new Date()
        });
        
        setSubmitted(true);
        setTimeout(() => {
          setEmail("");
          setSubmitted(false);
        }, 3000);
      } catch (err) {
        console.error("Signup failed:", err);
        setError("Failed to sign up. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E7] via-[#F5F1E8] to-[#E8DCC8]">
      {/* Launching Soon Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 right-6 z-50"
      >
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#C9A961] px-6 py-2 rounded-full shadow-xl">
          <p className="text-[#3E2723] font-semibold text-sm tracking-wide">
            LAUNCHING SOON
          </p>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[#D4AF37] rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 border-4 border-[#B87333] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          {/* Top Content - Logo and Text */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center w-full mb-12"
          >
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B87333] rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl text-[#FFF8E7] font-bold">RC</span>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-[#3E2723] mb-4 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Royal Chai
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl text-[#B87333] mb-6 italic"
              style={{ fontFamily: "Georgia, serif" }}
            >
              "Brew the Royal Tradition"
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-[#4A2C2A] mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Experience the authentic flavors of royal Indian households with
              our premium instant chai tea premix. Crafted with the finest
              spices and time-honored recipes, each cup brings you the warmth
              and elegance of a tradition steeped in heritage.
            </motion.p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-2xl mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://static.lumi.new/7c/7cc200fe831cc40b25f77fca48665c28.png"
                alt="Royal Chai Tea"
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/30 to-transparent"></div>
            </div>

            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#D4AF37] rounded-3xl -z-10"></div>

            {/* Steam Animation */}
            <motion.div
              animate={{
                y: [-20, -60],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-20 h-40 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-xl"
            />
          </motion.div>

          {/* Email Signup - Below Image */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B87333] w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-white border-2 border-[#D4AF37] focus:border-[#B87333] focus:outline-none text-[#3E2723] placeholder-[#B87333]/50 transition-all shadow-lg disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-[#3E2723] font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing Up..." : submitted ? "Thank You! ✓" : "Sign Up"}
              </button>
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#B87333] mt-3 text-sm text-center"
              >
                We'll notify you when we launch! 🎉
              </motion.p>
            )}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 mt-3 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
          </motion.form>

          {/* Social Icons - Below Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#B87333] hover:bg-[#D4AF37] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#B87333] hover:bg-[#D4AF37] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center text-[#B87333] hover:bg-[#D4AF37] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t-2 border-[#D4AF37]/20">
        <p className="text-[#4A2C2A] text-sm">
          © 2024 Royal Chai. All rights reserved. Crafted with tradition and
          love.
        </p>
      </footer>
    </div>
  );
}

export default App;

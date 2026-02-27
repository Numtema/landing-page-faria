"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4"
    >
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-[2rem] px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">Faria</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</Link>
          <Link href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Testimonials</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Log in</Link>
          <Link href="/signup" className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-4 right-4 bg-white rounded-[2rem] p-6 shadow-xl border border-slate-100 md:hidden flex flex-col gap-4"
        >
          <Link href="#features" className="text-base font-medium text-slate-800" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="#pricing" className="text-base font-medium text-slate-800" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#testimonials" className="text-base font-medium text-slate-800" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <hr className="border-slate-100" />
          <Link href="/login" className="text-base font-medium text-slate-800" onClick={() => setIsOpen(false)}>Log in</Link>
          <Link href="/signup" className="text-base font-medium bg-indigo-600 text-white px-5 py-3 rounded-full text-center" onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}

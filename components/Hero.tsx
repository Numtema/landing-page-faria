"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden flex flex-col items-center">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl -z-10" />
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
        >
          <Sparkles size={16} className="text-indigo-500" />
          <span className="text-sm font-medium text-slate-700">Introducing Faria 2.0</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
        >
          Manage links with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            beautiful precision
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl"
        >
          Effortlessly streamline your link management. Shorten, track, and organize all your links in one beautiful, rounded interface.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <Link href="/signup" className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 w-full sm:w-auto justify-center">
            Start creating for free
            <ArrowRight size={20} />
          </Link>
          <Link href="#demo" className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium border border-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto justify-center">
            View Demo
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto rounded-[2.5rem] p-2 bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-2xl"
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-slate-100">
            <Image 
              src="https://picsum.photos/seed/dashboard/1920/1080" 
              alt="Dashboard Preview" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay gradient for UI feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

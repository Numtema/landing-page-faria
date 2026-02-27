"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left: Form */}
      <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-24 xl:px-32">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">Faria</span>
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Reset password</h1>
          <p className="text-slate-600 mb-8">Enter your email and we&apos;ll send you a link to reset your password.</p>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Enter your email" />
            </div>
            <Button className="w-full rounded-xl h-12 text-base mt-2">Send Reset Link</Button>
          </form>
          
          <p className="mt-8 text-center text-sm text-slate-600">
            Remember your password? <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link>
          </p>
        </motion.div>
      </div>
      
      {/* Right: Image/Branding */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-50 p-12 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-center items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md bg-white/60 backdrop-blur-2xl p-8 rounded-[2rem] border border-white shadow-2xl"
          >
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-lg font-medium text-slate-800 mb-6 leading-relaxed">
              &quot;Faria has completely transformed how our team manages and tracks links. The analytics are incredibly detailed and the interface is a joy to use.&quot;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://picsum.photos/seed/sarah/100/100" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-900">Sarah Jenkins</div>
                <div className="text-xs text-slate-500">Marketing Director, TechCorp</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 py-16 md:py-24 rounded-t-[3rem] mt-20">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-500 rounded-xl flex items-center justify-center text-white">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">Faria</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Manage your links with ease. A premium SaaS template to kickstart your project.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Product</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Features</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Pricing</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Integration</Link></motion.li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Resources</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Blog</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Help Center</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Documentation</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">API Reference</Link></motion.li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">About Us</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><Link href="#" className="hover:text-white transition-colors">Contact</Link></motion.li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Faria Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <motion.div whileHover={{ y: -2 }}><Link href="#" className="text-slate-500 hover:text-white transition-colors">Twitter</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="#" className="text-slate-500 hover:text-white transition-colors">GitHub</Link></motion.div>
            <motion.div whileHover={{ y: -2 }}><Link href="#" className="text-slate-500 hover:text-white transition-colors">Discord</Link></motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

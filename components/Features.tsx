"use client";

import { motion } from "framer-motion";
import { Link2, Search, Calendar, BarChart3, Shield, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Link2 size={24} />,
    title: "Shorten Links",
    description: "Create short links that are easy to remember and share across all your platforms.",
    colSpan: "col-span-1 md:col-span-4",
    image: "https://picsum.photos/seed/link/600/400"
  },
  {
    icon: <Search size={24} />,
    title: "AI-Powered Search",
    description: "Quickly find the links you need with our advanced AI search capabilities.",
    colSpan: "col-span-1 md:col-span-8",
    image: "https://picsum.photos/seed/search/800/400"
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Advanced Analytics",
    description: "Track clicks, geographic data, and referrers in real-time.",
    colSpan: "col-span-1 md:col-span-8",
    image: "https://picsum.photos/seed/analytics/800/400"
  },
  {
    icon: <Shield size={24} />,
    title: "Secure Links",
    description: "Add password protection and expiration dates to your sensitive links.",
    colSpan: "col-span-1 md:col-span-4",
    image: "https://picsum.photos/seed/secure/600/400"
  }
];

export default function Features() {
  return (
    <section id="features" className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm mb-6"
          >
            <Zap size={16} fill="currentColor" />
            Features
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Manage Links Like a Pro
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl"
          >
            Everything you need to optimize, organize, and share your links with ease in one beautiful interface.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className={`${feature.colSpan} group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors`}
            >
              <div className="p-8 md:p-10 flex flex-col h-full z-10 relative">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-8 max-w-md">{feature.description}</p>
                
                <div className="mt-auto relative w-full h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 group-hover:shadow-md transition-shadow">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

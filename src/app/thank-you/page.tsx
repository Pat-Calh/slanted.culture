'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 to-pink-900/20 -z-10"></div>
      
      {/* Animated circles */}
      <div className="absolute -top-64 -left-64 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-rose-600/10 to-pink-600/10 blur-3xl"></div>
      <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-600/10 to-rose-600/10 blur-3xl"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl p-12 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl text-center"
      >
        {/* Animated checkmark */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="mx-auto mb-8 w-24 h-24 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center"
        >
          <svg 
            className="w-12 h-12 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </motion.div>
        
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
          Thank You!
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
          Your message has been received. We appreciate you reaching out and will get back to you as soon as possible.
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link 
            href="/" 
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-full hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-rose-500/20"
          >
            Back to Home
          </Link>
        </motion.div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            Follow us on social media for updates
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {[
              { name: 'Instagram', icon: 'instagram' },
              { name: 'Twitter', icon: 'twitter' },
              { name: 'Facebook', icon: 'facebook' },
              { name: 'YouTube', icon: 'youtube' },
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <span className="text-xl">{social.icon === 'instagram' ? '📸' : social.icon === 'twitter' ? '𝕏' : social.icon === 'facebook' ? 'f' : '▶'}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

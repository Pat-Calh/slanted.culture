"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop/Gallery' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events/Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants for mobile menu
  const menuVariants = {
    closed: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
    open: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-white/10 bg-[#2a2a2a] fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold tracking-widest uppercase">Slanted Culture</div>

      {/* Desktop Nav Links */}
      <motion.ul
        className="hidden md:flex gap-6 text-lg font-medium"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.11 } },
          hidden: {}
        }}
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.href}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
            }}
          >
            <motion.a
              href={link.href}
              className="transition font-medium px-1 py-0.5 rounded"
              style={{ display: 'inline-block' }}
              whileHover={{
                color: '#e11d48',
                textShadow: '0 0 8px #e11d48, 0 0 16px #e11d48, 0 0 32px #e11d48',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
            >
              {link.label}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Hamburger Icon for Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="block w-7 h-0.5 bg-white mb-1.5 rounded transition-transform duration-300" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
        <span className={`block w-7 h-0.5 bg-white mb-1.5 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
        <span className="block w-7 h-0.5 bg-white rounded transition-transform duration-300" style={{ transform: menuOpen ? "-rotate-45 translateY(-8px)" : "none" }} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#18181b] shadow-lg z-[60] flex flex-col items-center pt-24 gap-6 md:hidden"
            style={{ boxShadow: "-2px 0 16px rgba(0,0,0,0.4)" }}
          >
            <ul className="flex flex-col gap-6 w-full items-center text-white">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full text-center">
                  <a
                    href={link.href}
                    className="block w-full text-lg font-semibold py-3 rounded hover:bg-[#27272a] transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


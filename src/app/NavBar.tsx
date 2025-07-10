"use client";
import { motion } from "framer-motion";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop/Gallery' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events/Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-white/10 bg-[#2a2a2a] fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold tracking-widest uppercase">Slanted Culture</div>
      {/* Framer Motion animated nav links */}
      <motion.ul
        className="flex gap-6 text-lg font-medium"
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
    </nav>
  );
}

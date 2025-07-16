"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-screen text-center gap-4 overflow-hidden" style={{ position: 'relative', marginTop: '-4rem', paddingTop: '4rem' }}>
      {/* Full hero background GIF */}
      <img src="/240sxdrift.gif" alt="Drifting 240sx" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-[-1]" style={{ top: '4rem', height: 'calc(100% - 4rem)' }} />
      {/* Animated logo above GIF */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 my-2"
      >
        <img 
          src="/SlantedLogo.png" 
          alt="Slanted Culture Logo" 
          className="w-auto h-auto max-w-[360px]"
          width="360"
          height="160"
        />
      </motion.div>
      <Link href="/shop" className="relative z-10 inline-block px-8 py-3 bg-white/30 text-black font-bold rounded-full shadow-2xl hover:bg-accent transition text-lg mt-2">
        Explore the Gallery
      </Link>
      <p
        className="relative z-10 max-w-xl text-lg md:text-2xl text-white/80 font-medium mt-2 drop-shadow"
        style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
      >
        Car culture, art, and photography—where the streets meet creativity. Join the movement.
      </p>
    </section>
  );
}

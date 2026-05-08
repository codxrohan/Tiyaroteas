"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isFloating, setIsFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsFloating(true);
    } else {
      setIsFloating(false);
    }
  });

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-500 ease-in-out",
        isFloating 
          ? "px-8 py-4 bg-primary-container/40 backdrop-blur-xl rounded-full mt-4 mx-margin-safe max-w-container-max border border-secondary/20 shadow-[0_20px_50px_rgba(62,39,35,0.3)] mx-auto" 
          : "px-margin-safe py-6 bg-transparent w-full border-b border-white/10"
      )}
    >
      <div className="font-headline-md text-headline-md tracking-tighter text-primary dark:text-primary-fixed-dim">Vanya Chai</div>
      <div className="hidden md:flex items-center gap-8">
        <a className="text-secondary dark:text-secondary-fixed font-bold border-b border-secondary/50 pb-1 font-body-md text-body-md" href="#">The Ritual</a>
        <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Collections</a>
        <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Origins</a>
        <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md" href="#">Heritage</a>
      </div>
      <div className="flex items-center gap-6">
        <button className="material-symbols-outlined text-primary hover:scale-105 transition-transform">search</button>
        <button className="material-symbols-outlined text-primary hover:scale-105 transition-transform">shopping_bag</button>
        <button className="md:hidden material-symbols-outlined text-primary">menu</button>
      </div>
    </motion.nav>
  );
}

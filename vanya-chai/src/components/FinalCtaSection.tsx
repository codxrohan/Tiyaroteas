"use client";

import { motion } from "framer-motion";

export default function FinalCtaSection() {
  return (
    <section className="py-section-gap text-center px-margin-safe">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-display-hero text-headline-lg md:text-[84px] text-on-surface max-w-4xl mx-auto leading-tight mb-12"
      >
        Your Perfect Chai Moment Begins Here
      </motion.h2>
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#CD7F32] text-white px-16 py-6 rounded-full font-label-caps text-label-caps amber-glow hover:scale-105 transition-all text-lg"
      >
        Shop the Collection
      </motion.button>
    </section>
  );
}

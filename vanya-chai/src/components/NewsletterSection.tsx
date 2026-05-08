"use client";

import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="py-section-gap px-margin-safe max-w-container-max mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-16 rounded-[40px] relative overflow-hidden amber-glow"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="w-full h-full steam-overlay"></div>
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-gutter items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Join the Inner Circle</h2>
            <p className="text-on-surface-variant font-body-lg">
              Receive exclusive access to private reserve harvests and seasonal rituals.
            </p>
          </div>
          <div>
            <form className="flex flex-col gap-4">
              <input 
                className="bg-transparent border-b border-secondary/50 py-4 font-body-lg text-on-surface focus:outline-none focus:border-secondary transition-all placeholder:text-on-surface-variant/40" 
                placeholder="Email Address" 
                type="email"
              />
              <button 
                className="bg-[#CD7F32] text-white py-4 font-label-caps text-label-caps mt-4 rounded-full hover:scale-[1.02] transition-transform" 
                type="button"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

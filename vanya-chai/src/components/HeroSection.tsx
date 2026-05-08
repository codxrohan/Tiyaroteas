"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10"></div>
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full object-cover" 
          alt="A cinematic, high-key close-up of amber chai being poured into a traditional clay kulhad." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEauDVAwzZ0CCxRkO3AmR6PB65Vz9N76iEne9F3fKUZ6rza4QCKKIAF_42DCUccWbk783cXY411yzinsBnCAhr6gTvMEZHLa2aucwTLuZZ1aOjryyv4eKwqlGYeK6Ne2e03X16eqc-rsKkLHfh6pXmw-2dAbFeiz9pAMgPYEsXaWxMi-ShUbjdWfxn2YHhGpEU1QsVIsP6yafqBXByJEBVrwcmr0gPFnGGPQ7JUZaB5Xb0CLdeBKO5qLvPVpipkTVaKUa7XShd2p8Q"
        />
      </div>
      <div className="relative z-20 px-margin-safe grid md:grid-cols-2 gap-gutter w-full">
        <div className="flex flex-col justify-center gap-unit">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-label-caps text-label-caps text-secondary tracking-[0.3em] uppercase"
          >
            Est. 1924
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display-hero text-display-hero text-on-surface max-w-xl leading-none"
          >
            India Brews In Every Sip
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-md"
          >
            Experience the transcendence of the monsoon ritual. Handcrafted, heritage-driven, and purely sensory.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex gap-6"
          >
            <button className="bg-[#CD7F32] text-white px-10 py-4 rounded-full font-label-caps text-label-caps amber-glow hover:scale-105 transition-all">Explore Reserve</button>
            <button className="border border-secondary/40 backdrop-blur-md px-10 py-4 rounded-full font-label-caps text-label-caps text-on-surface hover:bg-white/5 transition-all">Our Story</button>
          </motion.div>
        </div>
        <div className="hidden md:flex justify-center items-center relative">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}

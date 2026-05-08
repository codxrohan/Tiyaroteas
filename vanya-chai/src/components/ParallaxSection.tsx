"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[614px] flex items-center justify-center overflow-hidden">
      <motion.img 
        style={{ y, scale: 1.2 }}
        className="absolute inset-0 w-full h-full object-cover opacity-30" 
        alt="A wide, atmospheric shot of an Indian spice market at dusk." 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBljAgCUv_CsRgqdzzvaWq5Nx3av6VKrG3mfF2zCe-YgEVycOWZQnRb9kx10sU8zoVQq4NnBLAecHSfvhTvSPh1Mg-izRZoYA8qLG0NhI04w8BNKb-46TFoLK0H3bRFBu--iJeUix8qPE87e-f2VMCb__yhn47oTwlKVLgzbA_mMV1SwRLnyMELd-m2bbD4xDnD2L6p1VT_zgWYdtof3tyU4bAoupRuLoaD5vIQjvn_PcyW4k0I8DIbv3pqmBC3SM1FLw_-bx4tl9Um"
      />
      <div className="relative z-10 text-center px-margin-safe">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display-hero text-[64px] md:text-[100px] text-on-surface leading-none"
        >
          The Essence of Time
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body-lg text-body-lg text-primary max-w-2xl mx-auto mt-6"
        >
          Slow-brewed, slow-grown, and savored slowly.
        </motion.p>
      </div>
    </section>
  );
}

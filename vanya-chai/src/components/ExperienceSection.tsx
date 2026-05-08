"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "A Soul's Comfort",
      desc: "The immediate embrace of heat that radiates through the palms on a rainy afternoon.",
      bgWord: "WARMTH"
    },
    {
      title: "Floral Spice",
      desc: "Top notes of cardamom dancing with the deep, earthy base of Assam CTC tea.",
      bgWord: "AROMA"
    },
    {
      title: "Universal Bond",
      desc: "The timeless gesture of sharing a cup, bridging hearts across generations.",
      bgWord: "HOSPITALITY"
    }
  ];

  return (
    <section className="bg-surface-container-low py-section-gap overflow-hidden">
      <div className="flex gap-gutter px-margin-safe horizontal-scroll-mask overflow-x-auto pb-12 hide-scrollbar">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="min-w-[400px] flex-shrink-0 group"
          >
            <div className="font-display-hero text-display-hero opacity-10 text-outline leading-none group-hover:opacity-30 transition-opacity">{exp.bgWord}</div>
            <div className="glass-panel p-12 -mt-10 relative z-10 cinematic-shadow">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">{exp.title}</h3>
              <p className="text-on-surface-variant">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

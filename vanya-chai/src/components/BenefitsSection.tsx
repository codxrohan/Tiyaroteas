"use client";

import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: "psychology",
      title: "Mental Clarity",
      desc: "Natural L-theanine promotes calm focus and alertness."
    },
    {
      icon: "health_and_safety",
      title: "Immune Boost",
      desc: "Spices rich in antioxidants to strengthen your vitality."
    },
    {
      icon: "spa",
      title: "Anti-Inflammatory",
      desc: "Ginger and cinnamon soothe the body from within."
    },
    {
      icon: "pulse_alert",
      title: "Heart Health",
      desc: "Promotes circulation and cardiovascular well-being."
    }
  ];

  return (
    <section className="py-section-gap bg-surface-container">
      <div className="px-margin-safe max-w-container-max mx-auto">
        <div className="grid md:grid-cols-4 gap-gutter">
          {benefits.map((ben, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col gap-6 p-8 rounded-2xl glass-panel text-center"
            >
              <span className="material-symbols-outlined text-secondary text-5xl">{ben.icon}</span>
              <h5 className="font-headline-md text-[24px] text-primary">{ben.title}</h5>
              <p className="text-body-md text-on-surface-variant">{ben.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

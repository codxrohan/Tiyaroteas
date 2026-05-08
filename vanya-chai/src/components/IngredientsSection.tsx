"use client";

import { motion } from "framer-motion";

export default function IngredientsSection() {
  const ingredients = [
    {
      name: "Cardamom Pods",
      desc: "Harvested from the lush hills of Idukki, these emerald pods offer a bright, citrusy perfume."
    },
    {
      name: "Ceylon Cinnamon",
      desc: "True quills with a sweet, woody depth that lingers long after the first sip."
    },
    {
      name: "Organic Saffron",
      desc: "The world's most precious spice, lending a regal golden hue and floral mystery."
    }
  ];

  return (
    <section className="py-section-gap px-margin-safe max-w-container-max mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row gap-gutter">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label-caps text-label-caps text-secondary">The Botanical Gallery</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-4 mb-12">Gifts of the Earth</h2>
          </motion.div>
          <div className="space-y-12">
            {ingredients.map((ing, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="border-b border-outline-variant/30 pb-8 group cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-headline-md text-headline-md text-on-surface">{ing.name}</h4>
                  <span className="material-symbols-outlined text-secondary group-hover:rotate-45 transition-transform">north_east</span>
                </div>
                <p className="text-on-surface-variant max-w-sm">{ing.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full min-h-[600px]"
          >
            <img 
              className="w-full h-full object-cover rounded-3xl cinematic-shadow" 
              alt="A vibrant editorial flat-lay of assorted Indian spices like cardamom, cinnamon, cloves, and star anise." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmpMqhkzFlSULem6ST86kgW3YYi7baTaPMNpdWBdJodQnu6MxKQ3ETGm2EYpeQONyk3qAT3g8XSxpM4qrnh5W9jyp21CQTeoTee4t8c0oRG-KIgAWscIS0HyoNsgc_Y4Yxa4HpLI3Kvg4TjC-1pGUVFG5hcXQG6B_i3Ph4NHdAKn-X7OlzgUXaNjokVFxxwUanjqZh1SycQhiOzSyXzjxV9J-oDYq0b2TE4ffjY-nLOMpvYYG5uiSEF-MPvf3WNXNXnFEbaQ5SPO3L"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

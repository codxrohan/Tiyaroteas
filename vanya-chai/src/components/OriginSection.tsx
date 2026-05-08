"use client";

import { motion } from "framer-motion";

export default function OriginSection() {
  return (
    <section className="py-section-gap">
      <div className="grid md:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-primary-container p-24 flex flex-col justify-center"
        >
          <span className="font-label-caps text-label-caps text-secondary mb-4">Our Roots</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Grown in the Clouds</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
            Our partner estates sit at 6,000 feet, where the air is pure and the soil is rich with volcanic minerals. This extreme elevation slows growth, intensifying the flavor profiles of every leaf.
          </p>
          <div className="flex gap-12 mt-8">
            <div>
              <span className="block text-3xl font-headline-md text-secondary">100%</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant">Single Origin</span>
            </div>
            <div>
              <span className="block text-3xl font-headline-md text-secondary">Organic</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant">Certified</span>
            </div>
            <div>
              <span className="block text-3xl font-headline-md text-secondary">Direct</span>
              <span className="font-label-caps text-[10px] text-on-surface-variant">Ethical Trade</span>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="h-[600px] md:h-auto"
        >
          <img 
            className="w-full h-full object-cover" 
            alt="A wide panoramic view of a lush green tea estate in the Indian highlands at sunrise." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPWjGABrbCFVW-B_EQVDHqb1h_AbSkj0cy9ZSrfpJw87-VkK0UdfE1Lnzh-xjQ4uCEuIsruZc4CkHbT3HI81rsaYrfve1Vp5If_ClgCVgEVaStD_RlPfOfSNd4NThi-5UIZ8-rOgWaHF5yReA7p3fa7sfUAO3DAzbP0JFdE0mX9zDOD3EbUfQO5DK6QnMYI92ESmRp5LG0JAuAkD-H9wlqYBwnDagVw9N_OTFahn_E7CuQpKowmVN-gSUSUsMuGUOfXwb7Ddf7zrgn"
          />
        </motion.div>
      </div>
    </section>
  );
}

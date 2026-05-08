"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section className="py-section-gap px-margin-safe">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="material-symbols-outlined text-secondary text-6xl mb-8">format_quote</span>
        <p className="font-headline-md text-headline-md text-on-surface italic leading-relaxed">
          "Imperial Chai is more than tea; it's a sensory bridge to my heritage. Each cup feels like a rainy evening in Darjeeling, wrapped in warmth and memory."
        </p>
        <div className="mt-12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-secondary p-1">
            <img 
              className="w-full h-full object-cover rounded-full" 
              alt="A professional cinematic portrait of a middle-aged man with a refined, sophisticated appearance." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtPw7USj2mTBMVvFqeXXzflH4hqzzHm1nECrz9stiqa_-aNkcdBaVUlQtoSgFW-x5nA18RUEzcKtT26INF2BrBPtgIQctVQvpQv0RoKhv9cdsqBpP1u7yHAdTNm1EG1aFTKo9cc0lD9jSRXL4XwwSNiTQCmbXE1CYi6acUb9i610Eyjb6Fe44uBeLa8tEYQ6g6j9-vOktKglq6itE_2mx5B96Nyau4OWZIKhIgMOOPmb9zW-0lai5wlCWdFKERLG5knHYT4pHxaOh-"
            />
          </div>
          <h6 className="font-label-caps text-label-caps text-on-surface">Arjun Kapoor</h6>
          <p className="text-on-surface-variant text-sm">Culinary Critic</p>
        </div>
      </motion.div>
    </section>
  );
}

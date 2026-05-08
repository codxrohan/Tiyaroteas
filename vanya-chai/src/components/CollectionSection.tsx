"use client";

import { motion } from "framer-motion";

export default function CollectionSection() {
  const products = [
    {
      category: "Classic Bold",
      title: "Monsoon Masala",
      desc: "A spirited blend of seven ancient spices and bold mountain tea.",
      price: "$48",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz0Y8oI1tXGYxPOvXxCWRa0EvNIz6F9HUSRScifWxIL_RpqvlQG7OypwFI16x6BMVBVUjyNHFnhzRuAqBL95KHfVT176WRXYmyuyBLIowFiK7WF4l9L9vSX6JuL86v2N6ezqCi-sTZIYS9VwZ5Z7MV3vj8GsYrJAs1lYAWt-mGdFY-_aEXG8WABHwCK0tZCncstobfHbqjGGGTtUFvAmWusIqIJpX1Urq65Jr-c0jZWNjGDlmF2xTS7MMeZZO21BP2iXbirZbm5p9g"
    },
    {
      category: "Rare Reserve",
      title: "Saffron Elixir",
      desc: "Infused with pure Kashmiri saffron for a golden, royal finish.",
      price: "$64",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALkJwzmX0s0SrHeZF3v38yB9GRJYW8GwxWxKneBBSrJlR7fGVOqJj6MAXdKpTRRIntoav0OVKvOApa71Vk73CqwDxCMJBEi0czm-U0HxNt2bKPiWTCj43WnauPjoyE82g_8iV8ygfxnuLVVv8TgJb6eCMFHYMWDeV_pswDIMaoAoNbAnJZeTFq6MOlqffXM6ekzbkIAqYeli7QOu_dkgeTiMtLTxaVOKRmZjKQOUKDyT6dWZp-QPb7umrHjKtwpY7KK8V3zQH7cZ7K",
      glow: true
    },
    {
      category: "Floral Infusion",
      title: "Rose Heritage",
      desc: "Velvety dried rose petals balanced with delicate ginger notes.",
      price: "$52",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDSOwX9GIwxjGMY1NbEuC4_o9FL80EJGGTtIIhx9z1wU6KuC2-GFx5SrncPJRAZlQPq4dEPlNHy0czzmBNVEkzlWvCB3kbY1QA522aWAjfv5sVMW4JSUzO5T-It8gANp5lixjBgUn5miqIcL-b7eMr39NX_lV4Zpsw3mTQ6WujNADNbwkfgCFn82GA5sLzGDrA6j2LtgC2YdAgZDgjQ4C8WiilZPCm_ZUUIwmTOEhpcPVJFAXrcbdYS3jlGrAo0U6i537EvizqtYLd"
    }
  ];

  return (
    <section className="py-section-gap px-margin-safe">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-24"
      >
        <span className="font-label-caps text-label-caps text-secondary mb-4">Curated Reserve</span>
        <h2 className="font-headline-lg text-headline-lg text-primary">Private Collections</h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-gutter max-w-container-max mx-auto">
        {products.map((prod, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className={`glass-panel p-8 rounded-xl relative group hover:-translate-y-4 transition-transform duration-500 ${prod.glow ? 'amber-glow' : ''}`}
          >
            <div className="h-80 w-full mb-8 relative">
              <img 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                alt={prod.title} 
                src={prod.image}
              />
            </div>
            <span className="font-label-caps text-label-caps text-tertiary">{prod.category}</span>
            <h4 className="font-headline-md text-headline-md text-on-surface my-2">{prod.title}</h4>
            <p className="text-on-surface-variant mb-6">{prod.desc}</p>
            <div className="flex justify-between items-center pt-6 border-t border-outline-variant/30">
              <span className="font-headline-md text-headline-md text-secondary">{prod.price}</span>
              <button className="material-symbols-outlined text-primary hover:text-secondary">add_circle</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

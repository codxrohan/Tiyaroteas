"use client";

import { motion } from "framer-motion";

export default function RitualSection() {
  return (
    <section className="h-[819px] flex flex-col md:flex-row">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex-1 relative overflow-hidden group"
      >
        <img 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          alt="A vertical composition showing a traditional brass tea kettle boiling over an open fire." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN6uY0NmkXjABGdOaniXkSpKNeN11o1ObctdJyOqRTGReXRvydyThUeVxBlF0GBuYIOpl6-THvI6Z-4YQuVxo4AaAYzWpjcDrz5gj0CBxkTPAuRrwYmlzfgFdoSKUpiGWn9focAC73NX09hptT8026CJZtQH8FDS-8qZwZ9nCJarJ-YrQvu9L5d4CFW00MmYJT9u6ScdkGTgytY-1HFFJVBT8KYqziAjBxUZO-3qoHtkRwpTJ0ziQmpRwSjHYCJcw-EAwvqwAHomGt"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h3 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-headline-lg text-headline-lg text-white drop-shadow-2xl"
          >
            The Boil
          </motion.h3>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 relative overflow-hidden group"
      >
        <img 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          alt="A high-speed cinematic shot of milk being poured into a dark tea infusion." 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3CxHOUl47e2klmMr6g6NA6bhl-TPiGidbionSSbw0COWyjpEWt0B6PoJKYpYvPpMMv0nuL47y_w4obfKzrHCGMWu85-6_ALXLDNFshURaABD1pgsvgM-B5uc4EDdvXW_BpkZf4URE3OUmrEnF8wkziz07Gx2u6QFgaL1mkm-XfjpE1y1rql59U3HaLwjGyP90rSaJP0P-vX56t0vx20ZWedK6VW_3W1xZfE330y8dDaR0fQGPZDwxSfNHOY6kPnwl2BxFh0QL4z8m"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h3 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-headline-lg text-headline-lg text-white drop-shadow-2xl"
          >
            The Pour
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
}

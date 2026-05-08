"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="py-section-gap px-margin-safe max-w-container-max mx-auto">
      <div className="grid md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-7 relative">
          <motion.img 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="w-full aspect-[4/5] object-cover rounded-xl cinematic-shadow" 
            alt="A documentary-style editorial photograph of emerald green tea plantations shrouded in heavy morning mist." 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCut1ANGVu8HIYojxarPpBwAkqAyq3sGrzjRIBEWwMjjvlHdqZEvqN_Fds_a7a3O-5ec8vt8zPRK0XqmYd5QS3xOgYMNlWynPm6XdOwfe-bb6MtZyz_PI_733N0LJKjckvW9I42bjG1kk3VOKi_ymREdumQP2--99hnCaeIeY9uRkEpZwZ8zP6n7AhFVFnJ7bqHS1bfFRgFsAzE77NwysE0oKBZHJvcGhH8gl6XWjbLGcbc21V270wEyRz0L1uC7GOeyRKmw4TLLoN_"
          />
          <div className="absolute -bottom-12 -right-12 w-1/2 hidden md:block">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full aspect-square object-cover rounded-xl border-8 border-background cinematic-shadow" 
              alt="Extreme close-up of sun-dried loose leaf tea mixed with star anise and crushed cinnamon sticks." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmx_fX27FprlOHv-w7fFcgAgTKTrvf-zpBrVeEo3qFe3zZNxNKXFO6JNyZrAyKE4u9yCAcbjjzm1m9e3w1gItLbVtjj-f123sONGHa1k_AuzoCJiy62QfTL7ZMsWRfIzLewn51DnQLgCRhn6kAjCBbsAtOOUFphRKPxlBTefAQiZgCn8rEV5iDRK2Sgptw9zGMvhvK4jamBYzHy6OJkyHbI66f32LxovL6d-UwKFc_GSLDhJnUJMM0tqnrQPB1iLK48V9gaLnU7w57"
            />
          </div>
        </div>
        <div className="md:col-span-5 md:pl-12 mt-24 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Heritage</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">The Alchemy of Hands</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Born from the misty peaks of the Blue Mountains, Imperial Chai is more than a beverage. It is a legacy preserved through four generations of tea masters.</p>
            <p className="font-body-md text-body-md text-on-surface-variant/80">Every harvest is hand-picked at dawn, when the leaves are heavy with dew, ensuring a profile that is as complex as the soil from which it springs.</p>
            <a className="mt-8 inline-block font-label-caps text-label-caps text-secondary border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all" href="#">Discover the Process</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-section-gap px-margin-safe w-full flex flex-col items-center gap-unit text-center border-t border-outline-variant/30">
      <div className="font-headline-lg text-headline-lg text-primary mb-8">Vanya Chai</div>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-12 opacity-80">
        © {new Date().getFullYear()} Vanya Chai. A tribute to the eternal monsoon ritual. Crafted for the sensory connoisseur.
      </p>
      <div className="flex flex-wrap justify-center gap-12 mb-12">
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1" href="#">The Art of Brewing</a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1" href="#">Boutique Locations</a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1" href="#">Private Reserve</a>
        <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors hover:translate-x-1" href="#">Sustainability</a>
      </div>
      <div className="flex gap-8 mb-12">
        <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110">share</span>
        <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110">mail</span>
        <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110">location_on</span>
      </div>
      <div className="text-on-surface-variant/40 text-xs font-label-caps tracking-widest">
        HANDCRAFTED IN THE INDIAN HIGHLANDS
      </div>
    </footer>
  );
}

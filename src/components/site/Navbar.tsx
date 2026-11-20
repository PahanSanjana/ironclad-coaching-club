import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { coach, navLinks, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Brand() {
  return (
    <a href="#top" className="font-display text-2xl uppercase tracking-wide">
      {coach.brand}<span className="text-primary">.</span>
      <span className="ml-2 font-sans text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">{coach.brandSuffix}</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b bg-background/90 backdrop-blur-md" : "bg-transparent")}>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4">
        <Brand />
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">{l.label}</a></li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm"><a href="#packages">Start Now</a></Button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="border-t px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}><a onClick={() => setOpen(false)} href={l.href} className="block border-b py-4 font-display text-2xl uppercase">{l.label}</a></li>
            ))}
          </ul>
          <Button asChild variant="hero" className="mt-6 w-full"><a href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button>
        </div>
      )}
    </header>
  );
}

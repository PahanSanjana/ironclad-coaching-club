import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { coach, navLinks, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" onClick={onClick} className="min-w-0 font-display text-2xl uppercase tracking-wide">
      {coach.brand}<span className="text-primary">.</span>
      <span className="ml-2 font-sans text-[10px] font-semibold tracking-[0.3em] text-muted-foreground">{coach.brandSuffix}</span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b bg-background/90 backdrop-blur-md" : "bg-transparent")}>
      <nav aria-label="Main navigation" className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 lg:flex lg:justify-between">
        <Brand onClick={() => setOpen(false)} />
        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">{l.label}</a></li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm"><a href="#packages">Start Now</a></Button>
        </div>
        <Button ref={toggleRef} type="button" variant="ghost" size="icon" className="size-11 shrink-0 lg:hidden" onClick={() => setOpen((previous) => !previous)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</Button>
      </nav>
      {open && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t px-5 pb-6 lg:hidden">
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

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => { io.disconnect(); el.classList.remove("reveal-pending"); };
  }, []);
  return <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, accent, sub }: { eyebrow: string; title: string; accent?: string; sub?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl">{title} {accent && <span className="text-primary">{accent}</span>}</h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

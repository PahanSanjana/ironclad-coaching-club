import { Star } from "lucide-react";
import { testimonials, transformations } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Transformations() {
  return (
    <section id="results" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Transformation gallery" title="Real people." accent="Real results." />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="group overflow-hidden border bg-background">
                <div className="grid grid-cols-2">
                  {[["Before", t.before], ["After", t.after]].map(([label, src]) => (
                    <div key={label} className="relative aspect-[3/4] overflow-hidden">
                      <img src={src} alt={`${t.name} ${label}`} loading="lazy" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${label === "Before" ? "grayscale" : ""}`} />
                      <span className={`absolute left-2 top-2 px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${label === "After" ? "bg-primary text-primary-foreground" : "bg-background/80"}`}>{label}</span>
                    </div>
                  ))}
                </div>
                <figcaption className="p-6"><p className="font-display text-2xl uppercase">{t.name}</p><p className="text-sm text-gold">{t.result}</p></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">Results vary by individual. Images shown are placeholders.</p>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Testimonials" title="What clients" accent="say." />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="h-full border bg-card p-8 transition-colors hover:border-primary/60">
                <div className="flex text-gold">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}</div>
                <p className="mt-5 text-lg leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center bg-primary font-display text-lg text-primary-foreground">{t.name[0]}</div>
                  <div><p className="font-semibold">{t.name}</p><p className="text-sm text-muted-foreground">{t.role}</p></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

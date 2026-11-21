import { Check, Crown, Flame } from "lucide-react";
import { packages, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Packages() {
  return (
    <section id="packages" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Coaching packages" title="Choose your" accent="level." sub="Every plan is 100% personalised. No templates. No guesswork." />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((p, i) => {
            const rec = p.tier === "recommended", prem = p.tier === "premium";
            return (
              <Reveal key={p.name} delay={i * 100} className={cn("min-w-0", rec && "lg:-translate-y-4")}>
                <div className={cn("relative flex h-full min-w-0 flex-col border bg-card p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8 xl:p-10",
                  rec && "border-primary shadow-red", prem && "border-gold/60 shadow-gold")}>
                  {rec && <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-foreground"><Flame className="size-3.5" />Recommended</span>}
                  {prem && <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 bg-gold-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-foreground"><Crown className="size-3.5" />Premium</span>}
                  <h3 className={cn("text-4xl", prem && "text-gold-gradient")}>{p.name}</h3>
                  <p className="mt-2 text-muted-foreground">{p.tagline}</p>
                  <div className="mt-8 grid grid-cols-[auto_minmax(0,1fr)] items-end gap-x-2 gap-y-1 border-b pb-8">
                    <span className="mb-2 text-sm font-semibold text-muted-foreground">LKR</span>
                    <span className="font-display text-5xl sm:text-6xl lg:text-5xl xl:text-6xl">{p.price}</span>
                    <span className="col-span-2 text-sm text-muted-foreground">/ {p.period}</span>
                  </div>
                  <ul className="mt-8 flex-1 space-y-4">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3"><Check className={cn("mt-0.5 size-5 shrink-0", prem ? "text-gold" : "text-primary")} /><span>{f}</span></li>
                    ))}
                  </ul>
                  <Button asChild size="lg" variant={rec ? "hero" : prem ? "gold" : "outlineLight"} className="mt-10 w-full">
                    <a href={whatsappLink(`Hi Coach! I'd like to join the ${p.name.toUpperCase()} package (LKR ${p.price} / ${p.period}).`)} target="_blank" rel="noreferrer">Get {p.name}</a>
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Not sure which plan fits? <a href={whatsappLink("Hi Coach! Can you help me choose a package?")} target="_blank" rel="noreferrer" className="font-semibold text-primary underline-offset-4 hover:underline">Ask on WhatsApp</a></p>
      </div>
    </section>
  );
}

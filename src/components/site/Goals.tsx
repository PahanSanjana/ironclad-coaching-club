import { Flame, RefreshCcw, Dumbbell, Zap, Sprout, Trophy, Medal, type LucideIcon } from "lucide-react";
import { goals } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

const icons: Record<string, LucideIcon> = { Flame, RefreshCcw, Dumbbell, Zap, Sprout, Trophy, Medal };

export function Goals() {
  return (
    <section id="goals" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Coaching goals" title="Whatever your goal," accent="we build it." sub="Programs engineered for every stage — from your first workout to your first trophy." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((g, i) => {
            const Icon = icons[g.icon] ?? Dumbbell;
            return (
              <Reveal key={g.title} delay={i * 60} className={i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}>
                <div className="group relative h-full overflow-hidden border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                  <span className="absolute right-4 top-2 font-display text-7xl text-foreground/5 transition-colors group-hover:text-primary/15">0{i + 1}</span>
                  <Icon className="size-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-6 text-2xl">{g.title}</h3>
                  <p className="mt-3 text-muted-foreground">{g.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Award, CheckCircle2, Quote } from "lucide-react";
import { coach } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-primary" />
          <img src={coach.portrait} alt={`Coach ${coach.name}`} className="relative aspect-[4/5] w-full object-cover grayscale-[30%]" loading="lazy" />
          <div className="absolute -bottom-6 right-4 bg-gold-gradient px-6 py-4 text-gold-foreground shadow-gold">
            <p className="font-display text-4xl">12+</p><p className="text-xs font-bold uppercase tracking-widest">Years Coaching</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow mb-4">About the coach</p>
          <h2 className="text-5xl md:text-6xl">{coach.name.split(" ")[0]} <span className="text-stroke">{coach.name.split(" ").slice(1).join(" ")}</span></h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{coach.location}</p>
          {coach.bio.map((p) => <p key={p} className="mt-5 text-lg text-muted-foreground">{p}</p>)}
          <blockquote className="mt-8 border-l-4 border-primary bg-card p-6">
            <Quote className="mb-2 size-6 text-primary" />
            <p className="text-lg italic">{coach.philosophy}</p>
          </blockquote>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl text-gold">Qualifications</h3>
              <ul className="space-y-3">{coach.qualifications.map((q) => <li key={q} className="flex gap-2 text-sm"><CheckCircle2 className="size-4 shrink-0 text-primary" />{q}</li>)}</ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl text-gold">Achievements</h3>
              <ul className="space-y-3">{coach.achievements.map((a) => <li key={a} className="flex gap-2 text-sm"><Award className="size-4 shrink-0 text-gold" />{a}</li>)}</ul>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-px border bg-border md:grid-cols-4">
        {coach.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="bg-background p-8 text-center">
            <p className="font-display text-5xl text-primary md:text-6xl">{s.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

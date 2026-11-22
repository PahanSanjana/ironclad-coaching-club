import { ArrowRight, Star } from "lucide-react";
import { coach, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 md:items-center md:pb-0">
      <img src={coach.heroImage} alt={`Bodybuilder ${coach.name} posing in a dark studio`} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[65%_20%]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-fade-bottom" />
      <div className="relative mx-auto w-full max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="eyebrow animate-rise mb-6">{coach.title}</p>
          <h1 className="animate-rise text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem]" style={{ animationDelay: "100ms" }}>
            Build the body <br /><span className="text-primary">you've earned.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "200ms" }}>
            I'm <span className="font-semibold text-foreground">{coach.name}</span>. Elite online coaching for fat loss, muscle and competition prep — built around your body, your schedule, your goals.
          </p>
          <div className="animate-rise mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap" style={{ animationDelay: "300ms" }}>
            <Button asChild variant="hero" size="xl" className="px-3 sm:px-8"><a href="#packages">Start Your Transformation <ArrowRight /></a></Button>
            <Button asChild variant="outlineLight" size="xl"><a href={whatsappLink()} target="_blank" rel="noreferrer"><WhatsAppIcon className="size-5" /> Free Consultation</a></Button>
          </div>
          <div className="animate-rise mt-10 flex items-center gap-3 text-sm text-muted-foreground" style={{ animationDelay: "400ms" }}>
            <div className="flex shrink-0 text-gold" aria-hidden="true">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
            <span><b className="text-foreground">4.9/5</b> from 500+ transformed clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const words = ["Fat Loss", "Muscle Building", "Contest Prep", "Strength", "Transformation", "Posing", "Nutrition"];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y bg-primary py-4 text-primary-foreground">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl uppercase">
        {[...words, ...words, ...words, ...words].map((w, i) => <span key={i} className="flex items-center gap-10">{w} <span className="text-primary-foreground/50">✦</span></span>)}
      </div>
    </div>
  );
}

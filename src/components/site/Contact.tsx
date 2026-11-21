import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { coach, packages, whatsappLink } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppIcon, socialList } from "./Icons";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", plan: packages[1]?.name ?? "", message: "" });
  const [error, setError] = useState("");
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => {
    const value = e.target.value;
    setForm((previous) => ({ ...previous, [k]: value }));
    setError("");
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) { setError("Please enter your name and a valid email."); return; }
    setError("");
    const msg = `Hi Coach! I'm ${form.name.trim()} (${form.email.trim()}).\nInterested in: ${form.plan}\n${form.message.trim()}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] gap-14 px-5 lg:grid-cols-2">
        <Reveal className="min-w-0">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="break-words text-4xl sm:text-5xl md:text-7xl">Your transformation <span className="text-primary">starts today.</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">Message me directly for a free consultation. Spots are limited each month to keep coaching personal.</p>
          <Button asChild variant="whatsapp" size="xl" className="mt-8"><a href={whatsappLink()} target="_blank" rel="noreferrer"><WhatsAppIcon className="size-6" /> Chat on WhatsApp</a></Button>
          <ul className="mt-10 space-y-4 text-muted-foreground">
            <li className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3"><Phone className="size-5 shrink-0 text-primary" /><a href={`tel:${coach.phone.replace(/\s/g, "")}`} className="min-w-0 hover:text-foreground">{coach.phone}</a></li>
            <li className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3"><Mail className="size-5 shrink-0 text-primary" /><a href={`mailto:${coach.email}`} className="min-w-0 break-words hover:text-foreground">{coach.email}</a></li>
            <li className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3"><MapPin className="size-5 shrink-0 text-primary" /><span className="min-w-0">{coach.location}</span></li>
          </ul>
          <div className="mt-8 flex gap-3">
            {socialList.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-12 items-center justify-center border transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary"><Icon className="size-5" /></a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150} className="min-w-0">
          <form onSubmit={submit} noValidate className="space-y-5 border bg-card p-6 sm:p-8 md:p-10">
            <h3 className="text-3xl">Apply for coaching</h3>
            <Input placeholder="Full name" name="name" autoComplete="name" required value={form.name} onChange={set("name")} className="h-12" aria-label="Full name" aria-invalid={!!error} aria-describedby={error ? "contact-error" : undefined} />
            <Input type="email" name="email" autoComplete="email" required placeholder="Email address" value={form.email} onChange={set("email")} className="h-12" aria-label="Email" aria-invalid={!!error} aria-describedby={error ? "contact-error" : undefined} />
            <select value={form.plan} onChange={set("plan")} aria-label="Package" className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-sm">
              {packages.map((p) => <option key={p.name} value={p.name} className="bg-card">{p.name} — LKR {p.price}</option>)}
              <option value="Not sure yet" className="bg-card">Not sure yet</option>
            </select>
            <Textarea placeholder="Tell me about your goals…" rows={5} value={form.message} onChange={set("message")} aria-label="Message" />
            {error && <p id="contact-error" role="alert" className="text-sm text-destructive">{error}</p>}
            <Button type="submit" variant="hero" size="lg" className="w-full"><Send /> Send via WhatsApp</Button>
            <p className="text-center text-xs text-muted-foreground">Your message opens in WhatsApp, ready to send.</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

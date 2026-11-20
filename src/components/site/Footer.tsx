import { coach, navLinks, whatsappLink } from "@/data/site";
import { Brand } from "./Navbar";
import { WhatsAppIcon, socialList } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
        <div><Brand /><p className="mt-4 max-w-xs text-sm text-muted-foreground">Premium online bodybuilding & physique coaching by {coach.name}.</p></div>
        <ul className="grid grid-cols-2 gap-3 text-sm">
          {navLinks.map((l) => <li key={l.href}><a href={l.href} className="text-muted-foreground hover:text-primary">{l.label}</a></li>)}
        </ul>
        <div className="flex gap-3 md:justify-end">
          {socialList.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-10 items-center justify-center border hover:border-primary hover:text-primary"><Icon className="size-4" /></a>)}
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {coach.brand} {coach.brandSuffix}. All rights reserved.</div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-110">
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, Marquee } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Goals } from "@/components/site/Goals";
import { Packages } from "@/components/site/Packages";
import { Transformations, Testimonials } from "@/components/site/Results";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer, FloatingWhatsApp } from "@/components/site/Footer";
import { coach } from "@/data/site";

const title = `${coach.brand} Coaching — Online Bodybuilding & Personal Training`;
const description = "Premium online coaching for fat loss, muscle building and bodybuilding contest prep. Plans from LKR 15,000 / 4 weeks.";
const image = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&h=630&fit=crop&q=80";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: image },
      { name: "twitter:image", content: image },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Goals />
        <Packages />
        <Transformations />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

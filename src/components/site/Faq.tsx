import { faqs } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading eyebrow="FAQ" title="Questions?" accent="Answered." />
        <Reveal>
          <Accordion type="single" collapsible className="border-t">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f${i}`}>
                <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:text-primary hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

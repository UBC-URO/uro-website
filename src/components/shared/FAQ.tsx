import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQItem = {
    question: string;
    answer: React.ReactNode;
};

export function FAQ({ items }: { items: FAQItem[] }) {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Frequently Asked Questions (FAQs)</h2>

            <Accordion type="single" collapsible className="w-full">
                {items.map((item, i) => (
                    <AccordionItem key={i} value={`q${i}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance text-slate-700">{item.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

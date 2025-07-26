import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Why do I need custom signs instead of standard signs?",
    answer: "Custom signs allow you to perfectly match your brand, message, and specific requirements. They ensure your signage stands out and effectively communicates your unique value proposition."
  },
  {
    question: "How to make a custom sign?",
    answer: "Simply use our online design tool to create your sign, choose your materials and size, and place your order. You can upload your own design or start from one of our professional templates."
  },
  {
    question: "What materials do you use to make custom signs?",
    answer: "We offer a variety of high-quality materials including aluminum, acrylic, vinyl, corrugated plastic, and more. Each material is selected for durability and professional appearance."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Get answers to common questions about our custom signs
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have a question?</p>
            <Button variant="red">Contact Support</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are Kiddo products safe for babies?",
    answer: "Yes! All Kiddo products are made from non-toxic, eco-friendly materials and are tested for baby safety. We ensure every product is suitable for children aged 1-4 years before it reaches you."
  },
  {
    question: "How long does delivery take?",
    answer: "Standard delivery takes 3-5 business days across India. Express shipping options are available at checkout for faster delivery."
  },
  {
    question: "Can I shop offline at a Kiddo store?",
    answer: "Absolutely! We have physical retail stores in major cities across India. You can use our store locator on the website to find the one nearest to you."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and cash on delivery for most locations."
  }
];

export default function FAQ() {
  return (
    <section className="py-2 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-kiddo-dark mb-4">Got Questions?</h2>
          <p className="text-2xl font-bold text-kiddo-dark font-heading">We've Got Answers!</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-kiddo-pink/30 rounded-2xl px-6 py-2 hover:bg-kiddo-pink/30 transition-colors">
              <AccordionTrigger className="text-lg font-bold text-kiddo-dark hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

'use client';

import type { Dictionary } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function FAQSection({ dict }: { dict: Dictionary }) {
  const [ref, isVisible] = useIntersectionObserver();

  const faqs = [
    {
      question: dict.faq.questions.howToRequest.question,
      answer: dict.faq.questions.howToRequest.answer,
    },
    {
      question: dict.faq.questions.isSafe.question,
      answer: dict.faq.questions.isSafe.answer,
    },
    {
      question: dict.faq.questions.howLong.question,
      answer: dict.faq.questions.howLong.answer,
    },
    {
      question: dict.faq.questions.whatInfo.question,
      answer: dict.faq.questions.whatInfo.answer,
    },
    {
      question: dict.faq.questions.fees.question,
      answer: dict.faq.questions.fees.answer,
    },
    {
      question: dict.faq.questions.whoCanHelp.question,
      answer: dict.faq.questions.whoCanHelp.answer,
    },
    {
      question: dict.faq.questions.privacy.question,
      answer: dict.faq.questions.privacy.answer,
    },
    {
      question: dict.faq.questions.update.question,
      answer: dict.faq.questions.update.answer,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
              {dict.faq.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.faq.subtitle}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card hover:shadow-lg transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

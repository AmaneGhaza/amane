'use client';

import type { Dictionary } from '@/lib/types';
import { Card, CardContent } from '../ui/card';
import { Quote, Star } from 'lucide-react';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function TestimonialsSection({ dict }: { dict: Dictionary }) {
  const [ref, isVisible] = useIntersectionObserver();

  const testimonials = [
    {
      name: dict.testimonials.stories.story1.name,
      location: dict.testimonials.stories.story1.location,
      story: dict.testimonials.stories.story1.story,
      helpType: dict.testimonials.stories.story1.helpType,
    },
    {
      name: dict.testimonials.stories.story2.name,
      location: dict.testimonials.stories.story2.location,
      story: dict.testimonials.stories.story2.story,
      helpType: dict.testimonials.stories.story2.helpType,
    },
    {
      name: dict.testimonials.stories.story3.name,
      location: dict.testimonials.stories.story3.location,
      story: dict.testimonials.stories.story3.story,
      helpType: dict.testimonials.stories.story3.helpType,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-muted/30 dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
              {dict.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="relative hover:shadow-lg hover:-translate-y-2 transition-all duration-500 h-full bg-white dark:bg-black">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-10 w-10 text-[#009736]/20 mb-4" />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#009736] text-[#009736]"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {testimonial.story}
                    </p>

                    <div className="border-t pt-4">
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                      <div className="mt-2 inline-block px-3 py-1 bg-[#EE2A35]/10 text-[#EE2A35] text-xs font-medium rounded-full">
                        {testimonial.helpType}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Dictionary } from '@/lib/types';
import { Card, CardContent } from '../ui/card';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection({ dict }: { dict: Dictionary }) {
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
    <section className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
              {dict.testimonials.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.story}
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                    <div className="mt-2 inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {testimonial.helpType}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
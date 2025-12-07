'use client';

import type { Dictionary, Locale } from '@/lib/types';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { AlertCircle, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function UrgentNeedsSection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [ref, isVisible] = useIntersectionObserver();

  const urgentCases = [
    {
      category: dict.urgentNeeds.cases.case1.category,
      description: dict.urgentNeeds.cases.case1.description,
      location: dict.urgentNeeds.cases.case1.location,
      timePosted: dict.urgentNeeds.cases.case1.timePosted,
      priority: 'high' as const,
    },
    {
      category: dict.urgentNeeds.cases.case2.category,
      description: dict.urgentNeeds.cases.case2.description,
      location: dict.urgentNeeds.cases.case2.location,
      timePosted: dict.urgentNeeds.cases.case2.timePosted,
      priority: 'urgent' as const,
    },
    {
      category: dict.urgentNeeds.cases.case3.category,
      description: dict.urgentNeeds.cases.case3.description,
      location: dict.urgentNeeds.cases.case3.location,
      timePosted: dict.urgentNeeds.cases.case3.timePosted,
      priority: 'high' as const,
    },
  ];

  const priorityColors = {
    urgent: 'bg-red-100 text-red-700 border-red-200',
    high: 'bg-orange-100 text-orange-700 border-orange-200',
  };

  const priorityLabels = {
    urgent: dict.urgentNeeds.priority.urgent,
    high: dict.urgentNeeds.priority.high,
  };

  return (
    <section ref={ref} className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline text-red-600">
              {dict.urgentNeeds.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {dict.urgentNeeds.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {urgentCases.map((case_, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="border-2 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 border ${priorityColors[case_.priority]}`}>
                      {priorityLabels[case_.priority]}
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3">{case_.category}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {case_.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{case_.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{case_.timePosted}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
              <Link href={`/${lang}/find-help`}>
                {dict.urgentNeeds.viewAll}
                <ArrowRight className="h-5 w-5 ms-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

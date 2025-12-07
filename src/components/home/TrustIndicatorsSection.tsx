'use client';

import type { Dictionary } from '@/lib/types';
import { Card, CardContent } from '../ui/card';
import { CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function TrustIndicatorsSection({ dict }: { dict: Dictionary }) {
  const [ref, isVisible] = useIntersectionObserver();

  const stats = [
    {
      number: dict.trustIndicators.stats.totalHelped.number,
      label: dict.trustIndicators.stats.totalHelped.label,
    },
    {
      number: dict.trustIndicators.stats.activeDonors.number,
      label: dict.trustIndicators.stats.activeDonors.label,
    },
    {
      number: dict.trustIndicators.stats.successRate.number,
      label: dict.trustIndicators.stats.successRate.label,
    },
    {
      number: dict.trustIndicators.stats.avgResponseTime.number,
      label: dict.trustIndicators.stats.avgResponseTime.label,
    },
  ];

  const guarantees = [
    dict.trustIndicators.guarantees.guarantee1,
    dict.trustIndicators.guarantees.guarantee2,
    dict.trustIndicators.guarantees.guarantee3,
    dict.trustIndicators.guarantees.guarantee4,
    dict.trustIndicators.guarantees.guarantee5,
  ];

  return (
    <section ref={ref} className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
              {dict.trustIndicators.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {dict.trustIndicators.subtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  {dict.trustIndicators.guaranteesTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        {guarantee}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

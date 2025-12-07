'use client';

import type { Dictionary } from '@/lib/types';
import { Heart, Users, Globe, Shield } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function WhoWeAreSection({ dict }: { dict: Dictionary }) {
  const [ref, isVisible] = useIntersectionObserver();

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-[#EE2A35]" />,
      title: dict.whoWeAre.values.compassion,
      description: dict.whoWeAre.values.compassionDesc,
    },
    {
      icon: <Shield className="h-8 w-8 text-[#009736]" />,
      title: dict.whoWeAre.values.trust,
      description: dict.whoWeAre.values.trustDesc,
    },
    {
      icon: <Users className="h-8 w-8 text-[#000000] dark:text-[#FFFFFF]" />,
      title: dict.whoWeAre.values.community,
      description: dict.whoWeAre.values.communityDesc,
    },
    {
      icon: <Globe className="h-8 w-8 text-[#009736]" />,
      title: dict.whoWeAre.values.transparency,
      description: dict.whoWeAre.values.transparencyDesc,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-gradient-to-br from-[#f5f5f5] to-white dark:from-[#111111] dark:to-[#000000]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-r from-[#EE2A35] to-[#009736]">
              {dict.whoWeAre.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {dict.whoWeAre.description}
            </p>
          </div>

          <Card className={`mb-8 border-2 border-[#009736]/20 hover:shadow-xl transition-all duration-700 bg-white dark:bg-black ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-[#009736]">
                {dict.whoWeAre.mission}
              </h3>
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                {dict.whoWeAre.missionStatement}
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className={`bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
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

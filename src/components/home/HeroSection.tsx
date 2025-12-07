'use client';

import { Button } from '@/components/ui/button';
import type { Dictionary, Locale } from '@/lib/types';
import Link from 'next/link';
import { Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { StatCard } from '../StatCard';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function HeroSection({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const [ref, isVisible] = useIntersectionObserver();

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      text: dict.hero.stats.donors,
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      text: dict.hero.stats.families,
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      text: dict.hero.stats.transparency,
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-white to-[#f0f0f0] dark:from-[#000000] dark:to-[#111111] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-10 left-10 w-32 h-32 bg-[#EE2A35]/20 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute bottom-10 right-10 w-40 h-40 bg-[#009736]/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 font-headline leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#EE2A35] dark:from-[#FFFFFF] dark:to-[#EE2A35]">
            {dict.hero.headline}
          </h1>
        </div>
        
        <div className={`max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <StatCard icon={stat.icon} text={stat.text} />
              </div>
            ))}
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300 bg-[#009736] hover:bg-[#007f2d] text-white">
            <Link href={`/${lang}/find-help`}>{dict.hero.buttons.findHelp}</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform duration-300 bg-[#EE2A35] hover:bg-[#c62828] text-white">
            <Link href={`/${lang}/donate`}>{dict.hero.buttons.donate}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

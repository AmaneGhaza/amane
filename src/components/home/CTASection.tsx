'use client';

import type { Dictionary, Locale } from '@/lib/types';
import { Button } from '../ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function CTASection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} className="py-20 md:py-24 bg-gradient-to-br from-[#000000] to-[#EE2A35] text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-0 w-96 h-96 bg-[#FFFFFF]/10 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} />
        <div className={`absolute bottom-0 right-0 w-96 h-96 bg-[#009736]/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Heart className="h-16 w-16 mx-auto mb-6 text-[#EE2A35] animate-pulse" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headline">
              {dict.cta.title}
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              {dict.cta.subtitle}
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto shadow-xl hover:scale-105 transition-transform duration-300 bg-[#009736] hover:bg-[#007f2d] text-white"
              asChild
            >
              <Link href={`/${lang}/request-help`}>
                {dict.cta.buttons.needHelp}
                <ArrowRight className="h-5 w-5 ms-2" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 hover:bg-white/20 text-white shadow-xl hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href={`/${lang}/donate`}>
                {dict.cta.buttons.wantToHelp}
                <Heart className="h-5 w-5 ms-2" />
              </Link>
            </Button>
          </div>

          <p className={`mt-8 text-sm opacity-75 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-75 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {dict.cta.urgencyNote}
          </p>
        </div>
      </div>
    </section>
  );
}

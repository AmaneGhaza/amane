import type { Dictionary, Locale } from '@/lib/types';
import { Button } from '../ui/button';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';

export default function CTASection({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headline">
            {dict.cta.title}
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            {dict.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
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
              className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 hover:bg-white/20 text-white shadow-xl hover:scale-105 transition-transform"
              asChild
            >
              <Link href={`/${lang}/donate`}>
                {dict.cta.buttons.wantToHelp}
                <Heart className="h-5 w-5 ms-2" />
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm opacity-75">
            {dict.cta.urgencyNote}
          </p>
        </div>
      </div>
    </section>
  );
}
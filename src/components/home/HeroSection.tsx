import { Button } from '@/components/ui/button';
import type { Dictionary, Locale } from '@/lib/types';
import Link from 'next/link';
import { Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { StatCard } from '../StatCard';

export default function HeroSection({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
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
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 font-headline leading-tight">
          {dict.hero.headline}
        </h1>
        
        <div className="max-w-3xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            {stats.map((stat, index) => (
              <StatCard key={index} icon={stat.icon} text={stat.text} />
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href={`/${lang}/find-help`}>{dict.hero.buttons.findHelp}</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href={`/${lang}/donate`}>{dict.hero.buttons.donate}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

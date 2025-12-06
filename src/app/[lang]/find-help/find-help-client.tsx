
'use client';
import React from 'react';
import type { Locale } from '@/app/i18n-config';
import Link from 'next/link';
import {
  HeartPulse,
  UtensilsCrossed,
  Home,
  School,
  Users,
  Wallet,
} from 'lucide-react';
import { IconCard } from '@/components/IconCard';
import type { Dictionary } from '@/lib/types';


export default function FindHelpClientPage({ dict, lang }: { dict: Dictionary, lang: Locale }) {
  
  const categories = [
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: dict.howItHelps.categories.medical,
      link: `/${lang}/request-help?category=medical`,
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: dict.howItHelps.categories.food,
      link: `/${lang}/request-help?category=food`,
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: dict.howItHelps.categories.shelter,
      link: `/${lang}/request-help?category=shelter`,
    },
    {
      icon: <School className="h-8 w-8" />,
      title: dict.howItHelps.categories.education,
      link: `/${lang}/request-help?category=education`,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: dict.howItHelps.categories.elderly,
      link: `/${lang}/request-help?category=elderly`,
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: dict.howItHelps.categories.financial,
      link: `/${lang}/request-help?category=financial`,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">{dict.navigation.findHelp}</h1>
        <p className="text-lg text-muted-foreground">{dict.findHelpPage.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {categories.map((category) => (
            <Link href={category.link} key={category.title}>
              <IconCard
                icon={category.icon}
                title={category.title}
                className="bg-card shadow-sm h-full hover:shadow-lg transition-shadow cursor-pointer"
              />
            </Link>
          ))}
        </div>
    </div>
  );
}
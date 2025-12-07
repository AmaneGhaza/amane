'use client';
import React from 'react';
import type { Dictionary, Locale } from '@/lib/types';
import { Stethoscope, Utensils, Home, GraduationCap, Users, HandHeart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FindHelpClientPage({ dict, lang }: { dict: Dictionary, lang: Locale }) {

  const CATEGORIES = [
    { id: "medical", label: dict.howItHelps.categories.medical, icon: Stethoscope, color: "text-red-500" },
    { id: "food", label: dict.howItHelps.categories.food, icon: Utensils, color: "text-green-500" },
    { id: "shelter", label: dict.howItHelps.categories.shelter, icon: Home, color: "text-purple-500" },
    { id: "education", label: dict.howItHelps.categories.education, icon: GraduationCap, color: "text-yellow-500" },
    { id: "elderly", label: dict.howItHelps.categories.elderly, icon: Users, color: "text-blue-500" },
    { id: "financial", label: dict.howItHelps.categories.financial, icon: HandHeart, color: "text-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">{dict.findHelpPage.title}</h1>
          <p className="text-lg text-muted-foreground">{dict.findHelpPage.description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.id} href={`/${lang}/request-help?category=${category.id}`} passHref>
                <Card className="h-full flex flex-col text-center items-center justify-center p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <CardHeader className="items-center">
                    <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ${category.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-bold text-xl">{category.label}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">{dict.cta.title}</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{dict.cta.subtitle}</p>
            <Button size="lg" asChild>
                <Link href={`/${lang}/request-help`}>
                    {dict.navigation.requestHelp}
                </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}

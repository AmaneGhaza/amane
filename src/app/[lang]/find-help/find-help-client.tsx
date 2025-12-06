
'use client';
import React, { useState, useMemo } from 'react';
import type { Locale } from '@/app/i18n-config';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Case = { id: string; title: string; city: string; description: string; category: string; urgency: string; imageUrl: string; raised: number; goal: number; };

const CaseCard: React.FC<{ data: Case, lang: Locale, dict: any }> = ({ data, lang, dict }) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="relative h-48 w-full mb-4">
          <Image src={data.imageUrl} alt={data.title} layout="fill" objectFit="cover" className="rounded-t-lg" data-ai-hint="charity donation" />
        </div>
        <CardTitle className="text-xl font-bold">{data.title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-muted-foreground"><MapPin size={14}/> {data.city}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <p className="text-muted-foreground line-clamp-2">{data.description}</p>
        <div className="flex gap-2 pt-2">
          <Badge variant="secondary">{(dict.requestHelpPage.helpTypes as any)[data.category]}</Badge>
          <Badge variant={data.urgency === 'high' ? 'destructive' : 'outline'}>{data.urgency}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={`/${lang}/find-help/${data.id}`}>{dict.buttons.learnMore}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
};

export default function FindHelpClientPage({ dict, lang, cases }: { dict: any, lang: Locale, cases: Case[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            c.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'all' || c.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, filterCategory, cases]);

  if (!dict) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="bg-[#006400] text-white p-6 md:p-10 rounded-2xl shadow-xl mb-10">
        <h1 className="text-3xl font-bold mb-6 text-center">{dict.navigation.findHelp}</h1>
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder={dict.helpSearch.placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 ps-12 pe-4 rounded-xl text-gray-900 border-none outline-none shadow-lg"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          />
          <Search className="absolute top-4 left-4 text-gray-400" size={24} />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <div className="flex items-center gap-2 text-gray-500 font-bold me-4">
          <Filter size={20} /> {dict.helpSearch.filters.helpType}:
        </div>
        {['all', 'medical', 'food', 'shelter', 'education'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
              filterCategory === cat
                ? 'bg-[#111111] text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat === 'all' ? dict.findHelpPage.allCategories : (dict.requestHelpPage.helpTypes as any)[cat]}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCases.map((caseData) => (
          <CaseCard key={caseData.id} data={caseData} lang={lang} dict={dict} />
        ))}
        {filteredCases.length === 0 && (
           <div className="col-span-full text-center py-20 text-gray-400">
             <p className="text-xl">{dict.findHelpPage.noResults}</p>
           </div>
        )}
      </div>
    </div>
  );
}


'use client';
import React, { useEffect, useState } from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

const MOCK_CASES = [
  { id: '1', title: 'Urgent Medical Supplies for Family', city: 'Gaza City', description: 'Family in need of urgent medical supplies for a child with a chronic condition.', category: 'medical', urgency: 'high', imageUrl: 'https://picsum.photos/seed/case1/800/600', raised: 250, goal: 1000 },
  { id: '2', title: 'Food Packages for Displaced Families', city: 'Rafah', description: 'Providing essential food packages to families displaced by recent events.', category: 'food', urgency: 'medium', imageUrl: 'https://picsum.photos/seed/case2/800/600', raised: 800, goal: 1500 },
  { id: '3', title: 'Temporary Shelter Construction', city: 'Khan Yunis', description: 'Building temporary shelters for those who have lost their homes.', category: 'shelter', urgency: 'high', imageUrl: 'https://picsum.photos/seed/case3/800/600', raised: 1200, goal: 5000 },
  { id: '4', title: 'Educational Materials for Children', city: 'Gaza City', description: 'Supplying books and learning materials to children unable to attend school.', category: 'education', urgency: 'low', imageUrl: 'https://picsum.photos/seed/case4/800/600', raised: 300, goal: 500 },
];

export default function CaseDetailPage({ params: { id, lang } }: { params: { id: string; lang: Locale } }) {
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  const caseData = MOCK_CASES.find(c => c.id === id);

  if (!caseData) {
    notFound();
  }

  if (!dict) {
    return null; // or a loading spinner
  }

  const percentage = Math.min(100, Math.round((caseData.raised / caseData.goal) * 100));

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link href={`/${lang}/find-help`} className="text-gray-500 hover:text-[#006400] mb-6 inline-block font-bold">
           ← {dict.buttons.back}
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6 relative h-80 w-full">
              <Image src={caseData.imageUrl} alt={caseData.title} layout="fill" objectFit="cover" data-ai-hint="charity donation" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-red-100 text-[#C62828] px-3 py-1 rounded-lg text-sm font-bold uppercase">
                {caseData.urgency === 'high' ? dict.requestHelpPage.form.urgency.high : caseData.urgency}
              </span>
               <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-bold uppercase">
                {(dict.requestHelpPage.helpTypes as any)[caseData.category]}
              </span>
            </div>

            <h1 className="text-3xl font-black text-[#111111] mb-4">{caseData.title}</h1>
            
            <div className="flex items-center gap-4 text-gray-600 mb-6 pb-6 border-b border-gray-100">
              <span className="flex items-center gap-1"><MapPin size={18} /> {caseData.city}</span>
              <span className="flex items-center gap-1 text-[#006400] font-bold">
                <CheckCircle size={18} /> {dict.safety.features.verifiedDonors}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3">Story</h3>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {caseData.description}
              {`\n\nThis family has been facing extreme hardship for the last 3 months. The conditions in ${caseData.city} have made it difficult to access basic necessities. Your support will go directly to purchasing specific items listed in the needs assessment.`}
            </p>
          </div>

          {/* Sidebar Donation Panel */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
               <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                     <span className="text-3xl font-black text-[#006400]">${caseData.raised}</span>
                     <span className="text-gray-500 font-medium">of ${caseData.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className="bg-[#006400] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 text-right">{percentage}% Funded</p>
               </div>

               <Button size="lg" className="w-full mb-3 bg-[#C62828] hover:bg-[#C62828]/90">
                 {dict.navigation.donate}
               </Button>

               <div className="bg-gray-50 p-4 rounded-xl mt-6">
                 <h4 className="font-bold mb-2 text-sm flex items-center gap-2">
                   <Clock size={16} /> Recent Updates
                 </h4>
                 <ul className="text-sm text-gray-600 space-y-2">
                   <li>• Verified by local partner (2 days ago)</li>
                   <li>• Needs assessment completed (3 days ago)</li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

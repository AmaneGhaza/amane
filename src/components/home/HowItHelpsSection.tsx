'use client';

import {
  HeartPulse,
  UtensilsCrossed,
  Home,
  School,
  Users,
  Wallet,
} from 'lucide-react';
import type { Dictionary } from '@/lib/types';
import { IconCard } from '../IconCard';
import { useIntersectionObserver } from '@/lib/animation-utils';

export default function HowItHelpsSection({ dict }: { dict: Dictionary }) {
  const [ref, isVisible] = useIntersectionObserver();

  const categories = [
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: dict.howItHelps.categories.medical,
      color: "from-[#EE2A35] to-[#000000]"
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: dict.howItHelps.categories.food,
      color: "from-[#009736] to-[#555555]"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: dict.howItHelps.categories.shelter,
      color: "from-[#000000] to-[#333333]"
    },
    {
      icon: <School className="h-8 w-8" />,
      title: dict.howItHelps.categories.education,
      color: "from-[#009736] to-[#000000]"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: dict.howItHelps.categories.elderly,
      color: "from-[#EE2A35] to-[#555555]"
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: dict.howItHelps.categories.financial,
      color: "from-[#000000] to-[#009736]"
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] dark:from-[#111111] dark:to-[#000000]">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-[#009736] to-[#EE2A35]">
            {dict.howItHelps.title}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 hover:scale-110 hover:-translate-y-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-75 rounded-xl blur transition-all duration-500`} />
                <IconCard
                  icon={category.icon}
                  title={category.title}
                  className="bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

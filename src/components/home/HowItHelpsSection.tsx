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

export default function HowItHelpsSection({ dict }: { dict: Dictionary }) {
  const categories = [
    {
      icon: <HeartPulse className="h-8 w-8" />,
      title: dict.howItHelps.categories.medical,
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: dict.howItHelps.categories.food,
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: dict.howItHelps.categories.shelter,
    },
    {
      icon: <School className="h-8 w-8" />,
      title: dict.howItHelps.categories.education,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: dict.howItHelps.categories.elderly,
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: dict.howItHelps.categories.financial,
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          {dict.howItHelps.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
          {categories.map((category) => (
            <IconCard
              key={category.title}
              icon={category.icon}
              title={category.title}
              className="bg-card shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

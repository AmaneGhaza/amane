import type { Dictionary } from '@/lib/types';
import { FilePenLine, UsersRound, Handshake } from 'lucide-react';
import { IconCard } from '../IconCard';

export default function QuickStartSection({ dict }: { dict: Dictionary }) {
  const steps = [
    {
      icon: <FilePenLine className="h-10 w-10" />,
      title: dict.quickStart.steps.step1.title,
      description: dict.quickStart.steps.step1.description,
    },
    {
      icon: <UsersRound className="h-10 w-10" />,
      title: dict.quickStart.steps.step2.title,
      description: dict.quickStart.steps.step2.description,
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: dict.quickStart.steps.step3.title,
      description: dict.quickStart.steps.step3.description,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          {dict.quickStart.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

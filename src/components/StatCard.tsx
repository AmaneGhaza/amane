import { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  text: string;
}

export function StatCard({ icon, text }: StatCardProps) {
  return (
    <div className="flex items-center justify-center gap-3 p-4 bg-background/50 rounded-lg border">
      <div className="text-primary">{icon}</div>
      <p className="text-sm md:text-base font-medium">{text}</p>
    </div>
  );
}
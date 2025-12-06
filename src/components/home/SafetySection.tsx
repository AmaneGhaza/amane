import type { Dictionary } from '@/lib/types';
import { BadgePercent, ShieldOff, Lock, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';

export default function SafetySection({ dict }: { dict: Dictionary }) {
    const safetyFeatures = [
        { icon: <BadgePercent className="h-7 w-7" />, text: dict.safety.features.noFees },
        { icon: <ShieldOff className="h-7 w-7" />, text: dict.safety.features.noIntermediaries },
        { icon: <Lock className="h-7 w-7" />, text: dict.safety.features.private },
        { icon: <ShieldCheck className="h-7 w-7" />, text: dict.safety.features.verifiedDonors },
    ]
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            {dict.safety.title}
            </h2>
            <Card className="bg-card">
                <CardContent className="p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {safetyFeatures.map(feature => (
                            <div key={feature.text} className="flex flex-col items-center text-center gap-3">
                                <div className="text-accent">{feature.icon}</div>
                                <p className="font-semibold text-lg">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t flex items-center justify-center">
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <Check className="h-5 w-5 text-accent" />
                            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4">
                                {dict.safety.privacy}
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

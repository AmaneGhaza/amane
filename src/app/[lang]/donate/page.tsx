import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, HeartHandshake } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

export default async function DonatePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const impactImage = placeholderImages.placeholderImages.find(p => p.id === 'donor-impact');

  const howItWorksSteps = [
    'Register as a donor with a verified profile.',
    'Browse help requests or let our system match you.',
    'Contribute directly to a family or individual.',
    'Receive transparent updates on the impact of your donation.',
  ];
  
  const impactStats = [
    { icon: <HeartHandshake className="h-8 w-8 text-primary" />, value: "+32,000", label: "Families Helped" },
    { icon: <Users className="h-8 w-8 text-primary" />, value: "+12,450", label: "Verified Donors" },
  ];

  return (
    <PageWrapper>
      <div className="container py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">{dict.donatePage.title}</h1>
          <p className="text-lg text-muted-foreground">{dict.donatePage.description}</p>
          <Button size="lg" className="mt-6" asChild>
            <Link href={`/${lang}/request-help`}>{dict.hero.buttons.donate}</Link>
          </Button>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
                 <h2 className="text-3xl font-bold font-headline mb-6">{dict.donatePage.howItWorks}</h2>
                <ul className="space-y-4">
                    {howItWorksSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                            <span className="text-lg text-muted-foreground">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {impactImage && (
              <Image
                src={impactImage.imageUrl}
                alt={impactImage.description}
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover aspect-[4/3]"
                data-ai-hint={impactImage.imageHint}
              />
            )}
        </div>

        <Card className="bg-card">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold font-headline">{dict.donatePage.impact}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    {impactStats.map(stat => (
                        <div key={stat.label} className="text-center">
                            {stat.icon}
                            <div className="text-5xl font-extrabold text-primary mt-2">{stat.value}</div>
                            <div className="text-muted-foreground mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

      </div>
    </PageWrapper>
  );
}

import Image from 'next/image';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

export default async function AboutPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const teamImage = placeholderImages.placeholderImages.find(p => p.id === 'about-us-team');


  const values = dict.aboutPage.valuesText.split(', ');

  return (
    <PageWrapper>
      <div className="container py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">{dict.aboutPage.title}</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">{dict.aboutPage.mission}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-muted-foreground">{dict.aboutPage.missionText}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">{dict.aboutPage.values}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                           {values.map(value => (
                             <li key={value} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-accent" />
                                <span className="text-lg text-muted-foreground">{value}</span>
                            </li>
                           ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="order-first lg:order-last">
              {teamImage && (
                <Image
                  src={teamImage.imageUrl}
                  alt={teamImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg object-cover aspect-[4/3]"
                  data-ai-hint={teamImage.imageHint}
                />
              )}
            </div>
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-4">{dict.aboutPage.verification}</h2>
            <p className="text-lg text-muted-foreground">
                We implement a rigorous verification process for both beneficiaries and donors to ensure all interactions on our platform are safe, legitimate, and transparent. Trust is the foundation of our work.
            </p>
        </div>

      </div>
    </PageWrapper>
  );
}

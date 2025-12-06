import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import Image from 'next/image';

const mockResults = [
  { id: 1, donorName: 'Global Aid Foundation', type: 'Medical', location: 'Gaza City', urgency: 'High', available: true, image: 'https://picsum.photos/seed/donor1/100/100' },
  { id: 2, donorName: 'Food for All', type: 'Food', location: 'Rafah', urgency: 'Medium', available: true, image: 'https://picsum.photos/seed/donor2/100/100' },
  { id: 3, donorName: 'Shelter Initiative', type: 'Shelter', location: 'Khan Yunis', urgency: 'High', available: false, image: 'https://picsum.photos/seed/donor3/100/100' },
  { id: 4, donorName: 'Dr. Aisha Ahmed', type: 'Medical', location: 'Gaza City', urgency: 'Low', available: true, image: 'https://picsum.photos/seed/donor4/100/100' },
];

export default async function FindHelpPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <div className="container py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">{dict.findHelpPage.title}</h1>
          <p className="text-lg text-muted-foreground">{dict.findHelpPage.description}</p>
        </header>

        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <Input placeholder={dict.helpSearch.filters.keyword} className="h-12 text-base lg:col-span-2" />
              <Select dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder={dict.helpSearch.filters.city} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gaza-city">Gaza City</SelectItem>
                  <SelectItem value="rafah">Rafah</SelectItem>
                  <SelectItem value="khan-yunis">Khan Yunis</SelectItem>
                </SelectContent>
              </Select>
              <Select dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder={dict.helpSearch.filters.helpType} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="medical">{dict.requestHelpPage.helpTypes.medical}</SelectItem>
                  <SelectItem value="food">{dict.requestHelpPage.helpTypes.food}</SelectItem>
                  <SelectItem value="shelter">{dict.requestHelpPage.helpTypes.shelter}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-4 text-center">
                <Button size="lg"><Search className="me-2 h-4 w-4" />{dict.helpSearch.buttons.search}</Button>
            </div>
          </CardContent>
        </Card>
        
        <h2 className="text-2xl font-bold mb-6 font-headline">{dict.findHelpPage.results}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResults.map(result => (
            <Card key={result.id} className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-start">
                <Image src={result.image} alt={result.donorName} width={64} height={64} className="rounded-full border" data-ai-hint="company logo" />
                <div className="flex-grow">
                    <CardTitle className="text-xl font-bold">{result.donorName}</CardTitle>
                    <CardDescription>{result.location}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <div className="flex gap-2">
                  <Badge variant="secondary">{result.type}</Badge>
                  <Badge variant={result.urgency === 'High' ? 'destructive' : 'outline'}>{result.urgency} Urgency</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Badge variant={result.available ? 'default' : 'secondary'} className={result.available ? 'bg-accent text-accent-foreground' : ''}>
                  {result.available ? dict.findHelpPage.status.available : dict.findHelpPage.status.unavailable}
                </Badge>
                <Button variant="outline" size="sm">{dict.buttons.learnMore}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

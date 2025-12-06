import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { RequestHelpForm } from '@/components/request-help/RequestHelpForm';
import { Card, CardContent } from '@/components/ui/card';

export default async function RequestHelpPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <div className="container py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">{dict.requestHelpPage.title}</h1>
            <p className="text-lg text-muted-foreground">{dict.requestHelpPage.description}</p>
          </header>
          <Card>
            <CardContent className="p-8">
              <RequestHelpForm dict={dict} />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}


'use client';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import RequestHelpForm from '@/components/request-help/RequestHelpForm';

function RequestHelpContent({ lang }: { lang: Locale }) {
  const [dict, setDict] = React.useState<any>(null);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  React.useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  if (!dict) {
    return null; // Or a loading spinner
  }
  
  return <RequestHelpForm dict={dict} lang={lang} initialCategory={category || 'food'} />;
}

export default function RequestHelpPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <PageWrapper>
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Suspense fallback={<div>Loading...</div>}>
          <RequestHelpContent lang={lang} />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
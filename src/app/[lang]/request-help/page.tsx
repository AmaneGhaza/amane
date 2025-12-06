

import { Suspense } from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import RequestHelpForm from '@/components/request-help/RequestHelpForm';

export default async function RequestHelpPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  
  return (
    <PageWrapper>
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Suspense fallback={<div>Loading...</div>}>
          <RequestHelpForm dict={dict} lang={lang} />
        </Suspense>
      </div>
    </PageWrapper>
  );
}

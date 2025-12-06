
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import FindHelpClientPage from './find-help-client';


export default async function FindHelpPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
       <FindHelpClientPage dict={dict} lang={lang} />
    </PageWrapper>
  );
}

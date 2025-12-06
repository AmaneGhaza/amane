import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/app/i18n-config';
import HeroSection from '@/components/home/HeroSection';
import HowItHelpsSection from '@/components/home/HowItHelpsSection';
import QuickStartSection from '@/components/home/QuickStartSection';
import SafetySection from '@/components/home/SafetySection';
import HelpSearchSection from '@/components/home/HelpSearchSection';
import { PageWrapper } from '@/components/layout/PageWrapper';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <HeroSection dict={dict} lang={lang} />
      <HowItHelpsSection dict={dict} />
      <QuickStartSection dict={dict} />
      <SafetySection dict={dict} />
      <HelpSearchSection dict={dict} />
    </PageWrapper>
  );
}

// src/app/[lang]/page.tsx
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';

// Import all section components
import HeroSection from '@/components/home/HeroSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';
import HowItWorksDetailedSection from '@/components/home/HowItWorksDetailedSection';
import UrgentNeedsSection from '@/components/home/UrgentNeedsSection';
import HowItHelpsSection from '@/components/home/HowItHelpsSection';
import TrustIndicatorsSection from '@/components/home/TrustIndicatorsSection';
import SafetySection from '@/components/home/SafetySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HelpSearchSection from '@/components/home/HelpSearchSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* 1. Hero Section - First impression with clear value */}
        <HeroSection dict={dict} lang={lang} />

        {/* 2. Who We Are - Build trust and identity */}
        <WhoWeAreSection dict={dict} />

        {/* 3. Urgent Needs - Create urgency and show real impact */}
        <UrgentNeedsSection dict={dict} lang={lang} />

        {/* 4. How It Works - Detailed step-by-step process */}
        <HowItWorksDetailedSection dict={dict} />

        {/* 5. How It Helps - Categories of assistance */}
        <HowItHelpsSection dict={dict} />

        {/* 6. Trust Indicators - Statistics and guarantees */}
        <TrustIndicatorsSection dict={dict} />

        {/* 7. Safety Section - Security features */}
        <SafetySection dict={dict} />

        {/* 8. Testimonials - Real success stories */}
        <TestimonialsSection dict={dict} />

        {/* 9. Help Search - Interactive search section */}
        <HelpSearchSection dict={dict} />

        {/* 10. FAQ - Answer all questions */}
        <FAQSection dict={dict} />

        {/* 11. Final CTA - Strong call to action */}
        <CTASection dict={dict} lang={lang} />
      </div>
    </PageWrapper>
  );
}
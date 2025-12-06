
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import { ShieldCheck, HelpCircle, FileText, Users, Search, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const Section: React.FC<{
  title: string;
  body: string;
  icon: React.ReactNode;
  bgColor?: string;
  children?: React.ReactNode;
  lang: Locale;
}> = ({ title, body, icon, bgColor = "bg-white", children, lang }) => (
  <section className={`py-12 md:py-16 px-4 ${bgColor} border-b border-gray-100`}>
    <div className="container mx-auto max-w-4xl">
      <div className={`flex flex-col md:flex-row gap-6 items-start ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
        <div className="bg-[#006400] text-white p-4 rounded-2xl shadow-lg shrink-0">
          {icon}
        </div>
        <div className="flex-grow">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">{title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{body}</p>
          {children}
        </div>
      </div>
    </div>
  </section>
);


export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const ArrowIcon = lang === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="bg-[#F8F9FA] py-16 px-4 border-b border-gray-200">
          <div className="container mx-auto max-w-5xl text-center">
            <span className="inline-block py-1 px-3 bg-red-100 text-[#C62828] rounded-full text-sm font-bold mb-4 animate-pulse">
              {dict.safety.features.verifiedDonors}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#111111] mb-6 leading-tight">
              {dict.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              {dict.hero.stats.families}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-red-200 shadow-xl bg-[#C62828] hover:bg-[#C62828]/90" asChild>
                <Link href={`/${lang}/request-help`}>
                  {dict.navigation.requestHelp}
                </Link>
              </Button>
               <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-green-200 shadow-xl bg-[#006400] text-white hover:bg-[#006400]/90" asChild>
                <Link href={`/${lang}/donate`}>
                 {dict.navigation.donate}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Question 1: Trust */}
        <Section
          lang={lang}
          title={dict.quickStart.steps.step3.title}
          body={dict.safety.title}
          icon={<ShieldCheck size={32} />}
        >
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg text-[#006400] font-bold text-sm">
               <ShieldCheck size={16} /> {dict.safety.features.verifiedDonors}
            </div>
             <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg text-blue-700 font-bold text-sm">
               <Users size={16} /> {dict.hero.stats.transparency}
            </div>
          </div>
        </Section>

        {/* Question 2: How to Ask */}
        <Section
          lang={lang}
          title={dict.quickStart.steps.step1.title}
          body={dict.quickStart.steps.step1.description}
          icon={<HelpCircle size={32} />}
          bgColor="bg-slate-50"
        >
          <Button variant="outline" className="mt-2" asChild>
            <Link href={`/${lang}/request-help`}>
               {dict.navigation.requestHelp} <ArrowIcon className="mx-2" size={20} />
            </Link>
          </Button>
        </Section>

        {/* Question 3: Info Needed */}
        <Section
          lang={lang}
          title={dict.quickStart.steps.step2.title}
          body={dict.quickStart.steps.step2.description}
          icon={<FileText size={32} />}
        />

        {/* Question 4: Donors */}
        <Section
          lang={lang}
          title={dict.donatePage.title}
          body={dict.donatePage.description}
          icon={<Users size={32} />}
          bgColor="bg-slate-50"
        />

        {/* Question 5: Speed/Search */}
        <Section
          lang={lang}
          title={dict.findHelpPage.title}
          body={dict.findHelpPage.description}
          icon={<Search size={32} />}
        >
           <div className="mt-4 max-w-md">
              <Link href={`/${lang}/find-help`}>
                <div className="relative">
                  <input
                    disabled
                    type="text"
                    placeholder={dict.helpSearch.placeholder}
                    className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white cursor-pointer"
                    dir={lang === 'ar' ? 'rtl' : 'ltr'}
                  />
                  <div className={`absolute top-0 h-full flex items-center px-4 bg-[#006400] text-white rounded-xl ${lang === 'ar' ? 'left-0 rounded-r-none' : 'right-0 rounded-l-none'}`}>
                     <Search size={20} />
                  </div>
                </div>
              </Link>
           </div>
        </Section>
      </div>
    </PageWrapper>
  );
}

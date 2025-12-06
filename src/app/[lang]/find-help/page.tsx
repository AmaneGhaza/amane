
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import FindHelpClientPage from './find-help-client';


const MOCK_CASES = [
  { id: '1', title: 'Urgent Medical Supplies for Family', city: 'Gaza City', description: 'Family in need of urgent medical supplies for a child with a chronic condition.', category: 'medical', urgency: 'high', imageUrl: 'https://picsum.photos/seed/case1/800/600', raised: 250, goal: 1000 },
  { id: '2', title: 'Food Packages for Displaced Families', city: 'Rafah', description: 'Providing essential food packages to families displaced by recent events.', category: 'food', urgency: 'medium', imageUrl: 'https://picsum.photos/seed/case2/800/600', raised: 800, goal: 1500 },
  { id: '3', title: 'Temporary Shelter Construction', city: 'Khan Yunis', description: 'Building temporary shelters for those who have lost their homes.', category: 'shelter', urgency: 'high', imageUrl: 'https://picsum.photos/seed/case3/800/600', raised: 1200, goal: 5000 },
  { id: '4', title: 'Educational Materials for Children', city: 'Gaza City', description: 'Supplying books and learning materials to children unable to attend school.', category: 'education', urgency: 'low', imageUrl: 'https://picsum.photos/seed/case4/800/600', raised: 300, goal: 500 },
];

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

import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import DonorPledgeForm from '@/components/donate/DonorPledgeForm';

export default async function DonorInfoPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {

  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <DonorPledgeForm dict={dict} />
    </PageWrapper>
  );
};

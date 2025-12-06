
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Globe, PieChart } from 'lucide-react';

export default async function DonorInfoPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-[#111111] mb-6">{dict.navigation.donate}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your contribution doesn't just buy supplies; it restores dignity and hope. Here is how we ensure your money makes an impact.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-16 h-16 bg-red-50 text-[#C62828] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Direct Impact</h3>
            <p className="text-gray-600">We connect you directly to specific cases. You choose where your money goes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-50 text-[#006400] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Global Access</h3>
            <p className="text-gray-600">We accept major international cards and cryptocurrencies to bypass restrictions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Transparency</h3>
            <p className="text-gray-600">Monthly reports and receipt verification for every dollar spent on the ground.</p>
            </div>
        </div>

        <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to make a difference?</h2>
            <div className="flex justify-center">
                <Button variant="secondary" size="lg" className="shadow-white/20 shadow-xl bg-[#006400] hover:bg-[#006400]/90" asChild>
                    <Link href={`/${lang}/find-help`}>
                        {dict.navigation.findHelp}
                    </Link>
                </Button>
            </div>
        </div>
        </div>
    </PageWrapper>
  );
};

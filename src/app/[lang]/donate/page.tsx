
'use client';
import React, { useState } from 'react';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, Globe, PieChart, CheckCircle } from 'lucide-react';
import type { Dictionary } from '@/lib/types';


function DonorForm({ dict, lang }: { dict: Dictionary, lang: Locale }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    donationType: 'financial',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo(0,0);
    }, 1000);
  };

  if (isSubmitted) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-[#006400] rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">{dict.requestHelpPage.form.success_title}</h2>
          <p className="text-gray-600 max-w-md text-lg mb-8">Thank you for your generosity. We will contact you shortly to coordinate your donation.</p>
          <Button variant="default" asChild>
            <Link href={`/${lang}`}>{dict.navigation.home}</Link>
          </Button>
        </div>
    );
  }

  return (
      <div className="bg-[#111111] text-white rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Ready to make a difference?</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border-2 border-gray-700 rounded-xl focus:border-[#006400] outline-none text-white"
                required
              />
            </div>
             <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border-2 border-gray-700 rounded-xl focus:border-[#006400] outline-none text-white"
                required
              />
            </div>
            <div>
               <label className="block text-sm font-bold mb-2 text-gray-300">I want to help with...</label>
               <select
                name="donationType"
                value={formData.donationType}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border-2 border-gray-700 rounded-xl focus:border-[#006400] outline-none text-white"
               >
                 <option value="financial">{dict.howItHelps.categories.financial}</option>
                 <option value="medical">{dict.howItHelps.categories.medical}</option>
                 <option value="food">{dict.howItHelps.categories.food}</option>
                 <option value="shelter">{dict.howItHelps.categories.shelter}</option>
                 <option value="education">{dict.howItHelps.categories.education}</option>
               </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-gray-300">Message (Optional)</label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know if you have specific preferences."
                className="w-full p-3 bg-gray-800 border-2 border-gray-700 rounded-xl focus:border-[#006400] outline-none resize-none text-white"
              />
            </div>
             <Button type="submit" size="lg" className="w-full bg-[#006400] hover:bg-[#006400]/90">
                {dict.buttons.submit}
             </Button>
        </form>
      </div>
  )
}

function DonorInfoPageComponent({ dict, lang }: { dict: Dictionary, lang: Locale }) {
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

       <DonorForm dict={dict} lang={lang} />
        </div>
    </PageWrapper>
  );
};


export default async function DonorInfoPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {

  const dict = await getDictionary(lang);

  return <DonorInfoPageComponent dict={dict} lang={lang} />;
};

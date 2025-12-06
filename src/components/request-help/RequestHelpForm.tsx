'use client';
import React, { useState } from 'react';
import type { Locale } from '@/app/i18n-config';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/lib/types';

export default function RequestHelpForm({ dict, lang }: { dict: Dictionary, lang: Locale }) {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    category: 'food',
    urgency: 'medium',
    description: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);
  const handleSubmit = () => {
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo(0,0);
    }, 1000);
  };

  if (isSubmitted) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
          <div className="w-20 h-20 bg-green-100 text-[#006400] rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-4">{dict.requestHelpPage.form.success_title}</h2>
          <p className="text-gray-600 max-w-md text-lg mb-8">{dict.requestHelpPage.form.success}</p>
          <Button variant="default" asChild>
            <Link href={`/${lang}`}>{dict.navigation.home}</Link>
          </Button>
        </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">{dict.navigation.requestHelp}</h1>
          <span className="text-sm font-bold text-gray-500">{dict.requestHelpPage.step} {step}/4</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className="bg-[#C62828] h-2 rounded-full transition-all duration-300" style={{ width: `${step * 25}%` }}></div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#006400] mb-4">{dict.requestHelpPage.form.steps.identity}</h2>
            <div>
              <label className="block text-sm font-bold mb-2">{dict.requestHelpPage.form.fullName.label}</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={dict.requestHelpPage.form.fullName.placeholder}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#006400] outline-none"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">{dict.requestHelpPage.form.age.label}</label>
              <input
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#006400] outline-none"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#006400] mb-4">{dict.requestHelpPage.form.steps.location}</h2>
            <div>
              <label className="block text-sm font-bold mb-2">{dict.requestHelpPage.form.city.label}</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#006400] outline-none"
                placeholder={dict.requestHelpPage.form.city.placeholder}
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              />
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <AlertCircle size={12} /> {dict.safety.privacy}
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#006400] mb-4">{dict.requestHelpPage.form.steps.needs}</h2>
            <div>
               <label className="block text-sm font-bold mb-2">{dict.requestHelpPage.form.helpCategory.label}</label>
               <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#006400] outline-none bg-white"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
               >
                 <option value="medical">{dict.requestHelpPage.helpTypes.medical}</option>
                 <option value="food">{dict.requestHelpPage.helpTypes.food}</option>
                 <option value="shelter">{dict.requestHelpPage.helpTypes.shelter}</option>
                 <option value="education">{dict.requestHelpPage.helpTypes.education}</option>
               </select>
            </div>
             <div>
               <label className="block text-sm font-bold mb-2">{dict.requestHelpPage.form.urgency.label}</label>
               <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#006400] outline-none bg-white"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
               >
                 <option value="high">{dict.requestHelpPage.form.urgency.high}</option>
                 <option value="medium">{dict.requestHelpPage.form.urgency.medium}</option>
                 <option value="low">{dict.requestHelpPage.form.urgency.low}</option>
               </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">{dict.requestHelpPage.form.description.label}</label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder={dict.requestHelpPage.form.description.placeholder}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#006400] outline-none resize-none"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-[#006400] mb-4">{dict.requestHelpPage.form.steps.contact}</h2>
            <div>
              <label className="block text-sm font-bold mb-2">{dict.requestHelpPage.form.contactPreference.label}</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-[#006400] outline-none"
                placeholder={dict.requestHelpPage.form.contactPreference.placeholder}
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              />
            </div>
             <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100">
               <p className="text-sm text-yellow-800">
                {dict.safety.title}
               </p>
             </div>
          </div>
        )}

        <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
          {step > 1 && (
            <Button variant="secondary" onClick={handleBack} className="flex-1">
              {dict.buttons.back}
            </Button>
          )}
          {step < 4 ? (
            <Button variant="default" onClick={handleNext} className="flex-1">
              {dict.buttons.next}
            </Button>
          ) : (
            <Button variant="destructive" onClick={handleSubmit} className="flex-1">
              {dict.buttons.submit}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '@/app/i18n-config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe, Check } from 'lucide-react';

// Language configuration with flags and native names
const languageConfig: Record<Locale, { flag: string; name: string; nativeName: string }> = {
  en: { flag: '🇬🇧', name: 'English', nativeName: 'English' },
  fr: { flag: '🇫🇷', name: 'French', nativeName: 'Français' },
  ar: { flag: '🇲🇦', name: 'Arabic', nativeName: 'العربية' },
};

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const currentLanguage = languageConfig[lang];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="relative h-9 w-9 sm:h-10 sm:w-10"
          aria-label="Change language"
        >
          <Globe className="h-[1.1rem] w-[1.1rem] sm:h-[1.2rem] sm:w-[1.2rem]" />
          <span className="sr-only">Change language - Current: {currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {i18n.locales.map((locale) => {
          const config = languageConfig[locale];
          const isActive = locale === lang;
          
          return (
            <DropdownMenuItem 
              key={locale} 
              asChild
              className="cursor-pointer"
            >
              <Link 
                href={redirectedPathName(locale)} 
                className="flex items-center justify-between w-full gap-2 py-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl leading-none" role="img" aria-label={config.name}>
                    {config.flag}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium leading-none">
                      {config.nativeName}
                    </span>
                    <span className="text-xs text-muted-foreground leading-none mt-1">
                      {config.name}
                    </span>
                  </div>
                </div>
                {isActive && (
                  <Check className="h-4 w-4 text-primary" aria-label="Current language" />
                )}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
import Link from 'next/link';
import { HandHeart } from 'lucide-react';
import type { Dictionary, Locale } from '@/lib/types';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function Header({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const navItems = [
    { href: '/', label: dict.navigation.home },
    { href: '/find-help', label: dict.navigation.findHelp },
    { href: '/donate', label: dict.navigation.donate },
    { href: '/about', label: dict.navigation.about },
    { href: '/contact', label: dict.navigation.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center">
        <div className="flex items-center gap-6">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <HandHeart className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">{dict.metadata.title}</span>
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={`/${lang}${item.href}`}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button asChild>
                <Link href={`/${lang}/request-help`}>{dict.navigation.requestHelp}</Link>
              </Button>
              <LanguageSwitcher lang={lang} />
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side={lang === 'ar' ? 'right' : 'left'}>
                  <div className="flex flex-col gap-6 mt-8">
                  <Link href={`/${lang}`} className="flex items-center gap-2">
                    <HandHeart className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">{dict.metadata.title}</span>
                  </Link>
                    <nav className="flex flex-col gap-4 text-lg font-medium">
                      {navItems.map((item) => (
                        <Link
                          key={item.label}
                          href={`/${lang}${item.href}`}
                          className="text-foreground/80 transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                    <Button asChild size="lg">
                      <Link href={`/${lang}/request-help`}>{dict.navigation.requestHelp}</Link>
                    </Button>
                    <div className="mx-auto">
                      <LanguageSwitcher lang={lang} />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}

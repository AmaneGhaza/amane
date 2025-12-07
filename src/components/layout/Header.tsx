import Link from 'next/link';
import { HandHeart, Menu, X } from 'lucide-react';
import type { Dictionary, Locale } from '@/lib/types';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';

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
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex h-14 sm:h-16 lg:h-18 items-center justify-between gap-3 sm:gap-4 max-w-[1920px] mx-auto">
          {/* Logo - Responsive sizing */}
          <Link 
            href={`/${lang}`} 
            className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
          >
            <HandHeart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-primary" />
            <span className="font-bold text-base sm:text-lg lg:text-xl whitespace-nowrap">
              {dict.metadata.title}
            </span>
          </Link>

          {/* Tablet Navigation (768px - 1023px) */}
          <nav className="hidden md:flex lg:hidden flex-1 items-center justify-center gap-3 text-sm font-medium">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.label}
                href={`/${lang}${item.href}`}
                className="text-foreground/60 transition-colors hover:text-foreground/80 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Navigation (1024px+) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`/${lang}${item.href}`}
                className="text-foreground/60 transition-colors hover:text-foreground/80 whitespace-nowrap px-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Actions (1024px+) */}
          <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-4 flex-shrink-0">
            <Button asChild size="default" className="whitespace-nowrap">
              <Link href={`/${lang}/request-help`}>
                {dict.navigation.requestHelp}
              </Link>
            </Button>
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Tablet Actions (768px - 1023px) */}
          <div className="hidden md:flex lg:hidden items-center justify-end gap-2 flex-shrink-0">
            <Button asChild size="sm" className="whitespace-nowrap text-xs">
              <Link href={`/${lang}/request-help`}>
                {dict.navigation.requestHelp}
              </Link>
            </Button>
            <LanguageSwitcher lang={lang} />
          </div>

          {/* Mobile Navigation (< 768px) */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher lang={lang} />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side={lang === 'ar' ? 'right' : 'left'}
                className="w-[280px] sm:w-[320px]"
              >
                <div className="flex flex-col gap-6 pt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/${lang}`} 
                      className="flex items-center gap-2"
                    >
                      <HandHeart className="h-6 w-6 text-primary" />
                      <span className="font-bold text-lg">
                        {dict.metadata.title}
                      </span>
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <Link
                          href={`/${lang}${item.href}`}
                          className="text-foreground/80 transition-colors hover:text-foreground hover:bg-accent rounded-md px-3 py-2.5 text-base font-medium"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-2 border-t pt-6">
                    <SheetClose asChild>
                      <Button asChild size="lg" className="w-full">
                        <Link href={`/${lang}/request-help`}>
                          {dict.navigation.requestHelp}
                        </Link>
                      </Button>
                    </SheetClose>
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
import Link from 'next/link';
import { HandHeart, Menu } from 'lucide-react';
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
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <HandHeart className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">{dict.metadata.title}</span>
        </Link>

        {/* Desktop Navigation */}
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
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <Button asChild>
            <Link href={`/${lang}/request-help`}>{dict.navigation.requestHelp}</Link>
          </Button>
          <LanguageSwitcher lang={lang} />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={lang === 'ar' ? 'right' : 'left'}>
              <div className="flex flex-col gap-6 pt-8">
                <Link href={`/${lang}`} className="flex items-center gap-2 mb-4">
                  <HandHeart className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">{dict.metadata.title}</span>
                </Link>
                <nav className="flex flex-col gap-4 text-lg font-medium">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={`/${lang}${item.href}`}
                        className="text-foreground/80 transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-4 border-t pt-6 space-y-4">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                      <Link href={`/${lang}/request-help`}>{dict.navigation.requestHelp}</Link>
                    </Button>
                  </SheetClose>
                  <div className="mx-auto flex justify-center">
                    <LanguageSwitcher lang={lang} />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
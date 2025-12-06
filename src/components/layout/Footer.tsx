import Link from 'next/link';
import type { Dictionary, Locale } from '@/lib/types';
import { HandHeart } from 'lucide-react';

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const navItems = [
    { href: '/about', label: dict.navigation.about },
    { href: '/contact', label: dict.navigation.contact },
    { href: '/request-help', label: dict.navigation.requestHelp },
    { href: '/donate', label: dict.navigation.donate },
  ];

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <HandHeart className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              {dict.footer.copyright}
            </p>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm">
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
      </div>
    </footer>
  );
}

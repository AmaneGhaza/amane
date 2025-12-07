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
    { href: '/find-help', label: dict.navigation.findHelp },
    { href: '/donate', label: dict.navigation.donate },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-y-6 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <HandHeart className="h-6 w-6 text-primary" />
            <p className="text-center text-sm text-muted-foreground">
              {dict.footer.copyright}
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
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
      </div>
    </footer>
  );
}
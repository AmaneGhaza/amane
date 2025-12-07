import Link from 'next/link';
import { HandHeart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import type { Dictionary, Locale } from '@/lib/types';

export default function Footer({
  dict,
  lang,
}: {
  dict: Dictionary;
  lang: Locale;
}) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: (dict.footer as any)?.quickLinks || 'Quick Links',
      links: [
        { href: '/', label: dict.navigation.home },
        { href: '/find-help', label: dict.navigation.findHelp },
        { href: '/donate', label: dict.navigation.donate },
        { href: '/about', label: dict.navigation.about },
        { href: '/contact', label: dict.navigation.contact },
      ],
    },
    {
      title: (dict.footer as any)?.resources || 'Resources',
      links: [
        { href: '/request-help', label: dict.navigation.requestHelp },
        { href: '/volunteer', label: (dict.footer as any)?.volunteer || 'Volunteer' },
        { href: '/faq', label: (dict.footer as any)?.faq || 'FAQ' },
        { href: '/news', label: (dict.footer as any)?.news || 'News & Updates' },
        { href: '/partners', label: (dict.footer as any)?.partners || 'Our Partners' },
      ],
    },
    {
      title: (dict.footer as any)?.legal || 'Legal',
      links: [
        { href: '/privacy', label: (dict.footer as any)?.privacy || 'Privacy Policy' },
        { href: '/terms', label: (dict.footer as any)?.terms || 'Terms of Service' },
        { href: '/cookies', label: (dict.footer as any)?.cookies || 'Cookie Policy' },
        { href: '/accessibility', label: (dict.footer as any)?.accessibility || 'Accessibility' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: (dict.footer as any)?.email || 'Email',
      value: 'contact@amangaza.org',
      href: 'mailto:contact@amangaza.org',
    },
    {
      icon: Phone,
      label: (dict.footer as any)?.phone || 'Phone',
      value: '+212 5XX-XXXXXX',
      href: 'tel:+2125XXXXXXXX',
    },
    {
      icon: MapPin,
      label: (dict.footer as any)?.address || 'Address',
      value: 'Rabat, Morocco',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="w-full border-t border-border/40 bg-muted/30">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Section - Takes more space on large screens */}
            <div className="lg:col-span-4">
              <Link href={`/${lang}`} className="flex items-center gap-2 mb-4">
                <HandHeart className="h-7 w-7 lg:h-8 lg:w-8 text-primary" />
                <span className="font-bold text-xl lg:text-2xl">
                  {dict.metadata.title}
                </span>
              </Link>
              <p className="text-sm text-muted-foreground mb-6 max-w-md leading-relaxed">
                {(dict.footer as any)?.description || 
                  'Connecting people in need with those who can help. Building a community of compassion and support across Morocco.'}
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3 text-sm">
                      <Icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                  
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:text-primary transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-2 lg:col-start-auto">
                <h3 className="font-semibold text-base lg:text-lg mb-4 text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={`/${lang}${link.href}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            <div className="lg:col-span-2 sm:col-span-2 lg:col-span-2">
              <h3 className="font-semibold text-base lg:text-lg mb-4 text-foreground">
                {(dict.footer as any)?.newsletter || 'Newsletter'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {(dict.footer as any)?.newsletterDesc || 'Stay updated with our latest news and initiatives.'}
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder={(dict.footer as any)?.emailPlaceholder || 'Your email'}
                  className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
                >
                  {(dict.footer as any)?.subscribe || 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-border/40 bg-muted/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} {dict.metadata.title}. {(dict.footer as any)?.rights || 'All rights reserved.'}
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>{(dict.footer as any)?.madeWith || 'Made with'}</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>{(dict.footer as any)?.inMorocco || 'in Morocco'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
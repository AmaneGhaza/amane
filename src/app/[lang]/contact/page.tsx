import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '@/app/i18n-config';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { GazaMap } from '@/components/GazaMap';
import Link from 'next/link';

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <PageWrapper>
      <div className="container py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-headline">{dict.contactPage.title}</h1>
          <p className="text-lg text-muted-foreground">{dict.contactPage.description}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name">{dict.contactPage.form.name.label}</label>
                    <Input id="name" placeholder={dict.contactPage.form.name.placeholder} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email">{dict.contactPage.form.email.label}</label>
                    <Input id="email" type="email" placeholder={dict.contactPage.form.email.placeholder} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message">{dict.contactPage.form.message.label}</label>
                  <Textarea id="message" placeholder={dict.contactPage.form.message.placeholder} className="min-h-[150px]" />
                </div>
                <Button type="submit" size="lg">
                  <Send className="me-2 h-4 w-4" />
                  {dict.buttons.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Button variant="outline" className="w-full justify-start gap-3" asChild>
                  <Link href="#">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <span>{dict.contactPage.info.whatsapp}</span>
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-3" asChild>
                   <Link href="#">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>{dict.contactPage.info.email}</span>
                   </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
                <GazaMap className="w-full h-auto object-contain p-4" />
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

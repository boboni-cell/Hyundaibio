import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { htmlLang, isLocale, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = await getMessages(locale);
  return { title: { default: messages.meta.title, template: `%s | Hyundai Bio` }, description: messages.meta.description };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <div lang={htmlLang[locale]} className="flex min-h-screen flex-col">
      <Navbar locale={locale} messages={messages} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} messages={messages} />
    </div>
  );
}

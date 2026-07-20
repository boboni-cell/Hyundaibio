import { notFound } from "next/navigation";
import { HomeContent } from "@/components/home-content";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function LocalizedHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomeContent locale={locale} messages={await getMessages(locale)} />;
}

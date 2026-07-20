import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  return <PageShell eyebrow={messages.navigation.contact} title={messages.contact.title} description={messages.contact.description} sections={messages.contact.sections} locale={locale} />;
}

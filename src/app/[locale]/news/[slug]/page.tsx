import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { getNewsTitle, newsItems } from "@/content/news";
import { isLocale, locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export function generateStaticParams() {
  return locales.flatMap((locale) => newsItems.map((item) => ({ locale, slug: item.slug })));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const title = getNewsTitle(slug, locale);
  if (!title) notFound();
  const messages = await getMessages(locale);
  return <PageShell eyebrow={messages.navigation.companyNews} title={title} description={messages.news.pending} sections={[messages.common.contentPending]} locale={locale} />;
}

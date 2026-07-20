import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { newsItems } from "@/content/news";
import { isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);

  return (
    <>
      <section className="page-hero"><div className="page-container"><p className="section-kicker light">{messages.navigation.activities}</p><h1>{messages.news.title}</h1><p>{messages.news.description}</p></div></section>
      <section className="activity-section page-container">
        <div className="news-grid">
          {newsItems.map((item) => (
            <article className="news-card" key={item.slug}>
              <MediaPlaceholder label={messages.common.newsImage} ratio="3:2" />
              <p>{messages.navigation.companyNews}</p><h3>{item.titles[locale]}</h3>
              <span>{messages.news.pending}</span>
              <Link className="text-link" href={`/${locale}/news/${item.slug}`}>{messages.news.read} →</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

const contactCopy: Record<Locale, { description: string; heading: string; address: string }> = {
  en: {
    description: "Contact Hyundai Bio for product inquiries, wholesale partnerships, and global distribution opportunities.",
    heading: "Let’s build a trusted partnership.",
    address: "Address",
  },
  zh: {
    description: "欢迎就产品咨询、批发合作与全球经销机会联系 Hyundai Bio。",
    heading: "与我们建立值得信赖的合作关系。",
    address: "公司地址",
  },
  ko: {
    description: "제품 문의, 도매 파트너십 및 글로벌 유통 협력에 대해 현대바이오로 연락해 주세요.",
    heading: "신뢰할 수 있는 파트너십을 시작하세요.",
    address: "회사 주소",
  },
};

const contactItems = [
  { label: "Tel", value: "+82-10-2114-8516", href: "tel:+821021148516", external: false },
  { label: "Mobile", value: "+82-10-2415-8525", href: "tel:+821024158525", external: false },
  { label: "E-mail", value: "mariobio@naver.com", href: "mailto:mariobio@naver.com", external: false },
  { label: "Instagram", value: "@mario_bio_beauty", href: "https://www.instagram.com/mario_bio_beauty/", external: true },
  { label: "WhatsApp", value: "+82-10-2415-8525", href: "https://wa.me/821024158525", external: true },
  { label: "Website", value: "www.hyundai-bio.net", href: "https://www.hyundai-bio.net/", external: true },
] as const;

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = await getMessages(locale);
  const copy = contactCopy[locale];

  return (
    <>
      <section className="page-hero">
        <div className="page-container">
          <p className="section-kicker light">{messages.navigation.contact}</p>
          <h1>{messages.contact.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>
      <section className="contact-section page-container">
        <div className="contact-heading">
          <p className="section-kicker">HYUNDAI BIO</p>
          <h2>{copy.heading}</h2>
        </div>
        <div className="contact-grid">
          {contactItems.map((item) => (
            <a
              className="contact-item"
              href={item.href}
              key={item.label}
              rel={item.external ? "noreferrer" : undefined}
              target={item.external ? "_blank" : undefined}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
        <div className="contact-address">
          <span>{copy.address}</span>
          <address>#Gasan Publik A08-0816, 60-26, Gasan-Dong, Geumcheon-Gu, Seoul, Korea</address>
        </div>
      </section>
    </>
  );
}

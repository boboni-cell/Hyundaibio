import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";

const inquiryCopy: Record<Locale, {
  eyebrow: string;
  title: string;
  description: string;
  company: string;
  country: string;
  phone: string;
  type: string;
  email: string;
  message: string;
  select: string;
  options: string[];
  submit: string;
  note: string;
}> = {
  en: {
    eyebrow: "BUSINESS INQUIRY",
    title: "Tell us about your business.",
    description: "Share your product, wholesale, or distribution inquiry with the Hyundai Bio team.",
    company: "Company name or your name",
    country: "Country",
    phone: "Phone",
    type: "Business type",
    email: "E-mail",
    message: "Message",
    select: "Select a business type",
    options: ["Wholesale", "Product inquiry", "Distribution partnership", "Other"],
    submit: "Send inquiry",
    note: "Submitting opens your default email application.",
  },
  zh: {
    eyebrow: "商务咨询",
    title: "请告诉我们您的业务需求。",
    description: "欢迎向 Hyundai Bio 团队提交产品、批发或经销合作咨询。",
    company: "公司名称或您的姓名",
    country: "国家",
    phone: "电话",
    type: "业务类型",
    email: "电子邮件",
    message: "咨询内容",
    select: "请选择业务类型",
    options: ["批发合作", "产品咨询", "经销合作", "其他"],
    submit: "发送咨询",
    note: "提交后将打开您的默认邮件应用。",
  },
  ko: {
    eyebrow: "비즈니스 문의",
    title: "비즈니스 요구사항을 알려주세요.",
    description: "제품, 도매 또는 유통 파트너십 문의를 현대바이오 팀에 보내주세요.",
    company: "회사명 또는 성함",
    country: "국가",
    phone: "전화번호",
    type: "비즈니스 유형",
    email: "이메일",
    message: "문의 내용",
    select: "비즈니스 유형을 선택하세요",
    options: ["도매", "제품 문의", "유통 파트너십", "기타"],
    submit: "문의 보내기",
    note: "제출하면 기본 이메일 앱이 열립니다.",
  },
};

export default async function InquiryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = inquiryCopy[locale];

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="page-container">
          <p className="section-kicker light">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>
      <section className="inquiry-section page-container">
        <form
          action="mailto:mariobio@naver.com?subject=Hyundai%20Bio%20Business%20Inquiry"
          className="inquiry-form"
          encType="text/plain"
          method="post"
        >
          <label className="inquiry-field">
            <span>{copy.company} *</span>
            <input autoComplete="organization" name="company" required />
          </label>
          <label className="inquiry-field">
            <span>{copy.country} *</span>
            <input autoComplete="country-name" name="country" required />
          </label>
          <label className="inquiry-field">
            <span>{copy.phone} *</span>
            <input autoComplete="tel" name="phone" required type="tel" />
          </label>
          <label className="inquiry-field">
            <span>{copy.type} *</span>
            <select defaultValue="" name="businessType" required>
              <option disabled value="">{copy.select}</option>
              {copy.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <label className="inquiry-field inquiry-field-wide">
            <span>{copy.email} *</span>
            <input autoComplete="email" name="email" required type="email" />
          </label>
          <label className="inquiry-field inquiry-field-wide">
            <span>{copy.message} *</span>
            <textarea name="message" required rows={8} />
          </label>
          <div className="inquiry-submit inquiry-field-wide">
            <small>{copy.note}</small>
            <button type="submit">{copy.submit}</button>
          </div>
        </form>
      </section>
    </>
  );
}

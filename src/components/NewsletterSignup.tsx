export function NewsletterSignup({ kicker, title, placeholder }: { kicker: string; title: string; placeholder: string }) {
  return (
    <section className="newsletter-section">
      <div className="page-container newsletter-inner">
        <div><p className="section-kicker light">{kicker}</p><h2>{title}</h2></div>
        <div className="newsletter-placeholder" aria-label={placeholder}><span>{placeholder}</span><b>→</b></div>
      </div>
    </section>
  );
}

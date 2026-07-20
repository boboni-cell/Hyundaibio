export function BrandLogos({ labels }: { labels: string[] }) {
  return (
    <div className="brand-logos" aria-label="Product categories">
      {labels.map((label) => <span key={label}>{label}</span>)}
    </div>
  );
}

export function StatsCounter({ labels, pending }: { labels: string[]; pending: string }) {
  return (
    <div className="metrics-grid">
      {labels.map((label) => (
        <div className="metric" key={label}>
          <strong>—</strong><span>{label}</span><small>{pending}</small>
        </div>
      ))}
    </div>
  );
}

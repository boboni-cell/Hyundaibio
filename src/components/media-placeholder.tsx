type MediaPlaceholderProps = {
  label: string;
  ratio?: string;
  className?: string;
};

export function MediaPlaceholder({
  label,
  ratio = "16:9",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder ${className}`}>
      <span className="media-index">MEDIA</span>
      <div>
        <p>{label}</p>
        <span>{ratio}</span>
      </div>
    </div>
  );
}

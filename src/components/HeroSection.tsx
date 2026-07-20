import { MediaPlaceholder } from "@/components/media-placeholder";

export function HeroSection({ label }: { label: string }) {
  return (
    <section className="home-hero">
      <MediaPlaceholder label={label} ratio="Desktop 16:9 · Mobile 4:5" className="hero-placeholder" />
    </section>
  );
}

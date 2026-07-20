import { ProductCard } from "@/components/product-card";
import { products } from "@/content/products";
import type { Locale } from "@/i18n/config";

export function ProductCarousel({ locale }: { locale: Locale }) {
  return (
    <div className="product-strip">
      {products.filter((product) => !product.featured).slice(0, 4).map((product) => (
        <ProductCard product={product} locale={locale} key={product.slug} />
      ))}
    </div>
  );
}

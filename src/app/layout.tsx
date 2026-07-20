import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hyundai Bio",
  description: "Hyundai Bio global medical aesthetics website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full">{children}</body>
    </html>
  );
}

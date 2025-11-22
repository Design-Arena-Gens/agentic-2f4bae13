import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الاجابة تطول",
  description: "منصة لإنشاء إجابات مطولة تلقائياً"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

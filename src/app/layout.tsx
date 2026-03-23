import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A.R. Sahel Energy Ltd | Import & Export of Petroleum & Energy Products",
  description:
    "A.R. Sahel Energy Ltd is a leading energy company specializing in the import and export of petroleum and energy products across West Africa and the Sahel region. Based in Sokoto, Nigeria.",
  keywords: [
    "petroleum",
    "energy",
    "import",
    "export",
    "Sahel",
    "Nigeria",
    "Sokoto",
    "oil",
    "gas",
    "West Africa",
  ],
  openGraph: {
    title: "A.R. Sahel Energy Ltd",
    description: "Powering Africa's Energy Future — Import & Export of Petroleum & Energy Products",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

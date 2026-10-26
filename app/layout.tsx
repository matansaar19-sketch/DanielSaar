import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import { ClientOverlays } from "@/components/ClientOverlays";
import { JsonLd } from "@/components/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
  display: "swap",
});

const siteUrl = getSiteUrl();

const SITE_TITLE = "סטוריטלינג עסקי ואישי – ספרי חיים ותוכן לעסקים | דניאל סער";
const SITE_DESCRIPTION =
  "דניאל סער – כתיבת ספר חיים וסיפור אישי, וכתיבת תוכן לעסקים: אתרים, עמודי נחיתה ותסריטים לסושיאל. 7 שנות ניסיון בסטוריטלינג.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SITE_TITLE,
    template: "%s | דניאל סער",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "כתיבת ספר חיים",
    "כתיבת סיפור אישי",
    "ספר מורשת משפחתית",
    "כתיבת תוכן לעסקים",
    "כתיבת תוכן לאתרים",
    "סטוריטלינג",
    "דניאל סער",
  ],
  authors: [{ name: "דניאל סער" }],
  creator: "דניאל סער",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    siteName: "דניאל סער",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "דניאל סער" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const a11yBoot = `(function(){try{var r=document.documentElement;var f=localStorage.getItem('a11y-font-scale');var n=localStorage.getItem('a11y-negative-colors');var c=localStorage.getItem('a11y-high-contrast');var m=localStorage.getItem('a11y-reduce-motion');var u=localStorage.getItem('a11y-underline-links');var neg=n==='true'||c==='true';r.dataset.fontScale=f==='large'?'large':'normal';r.dataset.negativeColors=neg?'true':'false';r.dataset.reduceMotion=m==='true'?'true':'false';r.dataset.underlineLinks=u==='true'?'true':'false';}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={assistant.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: a11yBoot }} />
        <JsonLd />
      </head>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          דילוג לתוכן הראשי
        </a>
        {children}
        <ClientOverlays />
      </body>
    </html>
  );
}

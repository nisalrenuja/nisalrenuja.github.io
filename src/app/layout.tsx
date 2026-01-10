
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PROFILE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${PROFILE.name} - ${PROFILE.title}`,
  description: PROFILE.about,
  keywords: [
    "Software Engineer",
    "Cloud Native",
    "AWS",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "DevOps",
    "Microservices",
    "Data Science",
    "AI",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.socials.github }],
  openGraph: {
    title: `${PROFILE.name} - ${PROFILE.title}`,
    description: PROFILE.about,
    type: "website",
    locale: "en_US",
    siteName: PROFILE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} - ${PROFILE.title}`,
    description: PROFILE.about,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: PROFILE.name,
              jobTitle: PROFILE.title,
              email: PROFILE.contact.email,
              telephone: PROFILE.contact.phone,
              url: "https://nisalrenuja.com",
              sameAs: [PROFILE.socials.github, PROFILE.socials.linkedin],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dehiwala",
                addressRegion: "Western Province",
                addressCountry: "LK",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

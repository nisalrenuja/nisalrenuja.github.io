import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { PROFILE } from "@/lib/data";
import { SITE_URL, OG_IMAGE, identityJsonLd, jsonLdProps } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = `${PROFILE.name} | ${PROFILE.title}`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.pitch,
  keywords: [
    "AI engineer for hire",
    "hire AI engineer Sri Lanka",
    "AI consultant Colombo",
    "cloud-native architect",
    "production machine learning",
    "computer vision engineer",
    "LLM integration consultant",
    "MLOps consultant",
    "AWS solutions architect Sri Lanka",
    "Kubernetes consultant",
    "microservices architect",
    "freelance software engineer Sri Lanka",
    "Go developer",
    "NestJS developer",
    "Next.js developer",
    "Nisal Palliyaguru",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.socials.github }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo-pic.svg",
    shortcut: "/images/logo-pic.svg",
    apple: "/images/logo-pic.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title,
    description: PROFILE.pitch,
    siteName: PROFILE.name,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${PROFILE.name}, ${PROFILE.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: PROFILE.pitch,
    creator: "@nisalrenuja",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script {...jsonLdProps(identityJsonLd)} />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PROFILE } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://nisalrenuja.github.io";
const ogImage = `${siteUrl}/images/profile-pic.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PROFILE.name} - ${PROFILE.title}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: PROFILE.about.split("\n\n")[0],
  keywords: [
    "Nisal Palliyaguru",
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Native",
    "AWS Solutions Architect",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Go Developer",
    "DevOps Engineer",
    "Microservices",
    "Data Science",
    "Machine Learning",
    "AI Engineer",
    "Sri Lanka Software Engineer",
    "Backend Developer",
    "Frontend Developer",
    "Kubernetes",
    "Docker",
    "NestJS",
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
    icon: "/images/logo-pic.png",
    shortcut: "/images/logo-pic.png",
    apple: "/images/logo-pic.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${PROFILE.name} - ${PROFILE.title}`,
    description: PROFILE.about.split("\n\n")[0],
    siteName: PROFILE.name,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} - Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} - ${PROFILE.title}`,
    description: PROFILE.about.split("\n\n")[0],
    creator: "@nisalrenuja", // Update with your Twitter handle if you have one
    images: [ogImage],
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
    canonical: siteUrl,
  },
  category: "technology",
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
                document.documentElement.setAttribute('data-theme', 'dark');
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
              givenName: PROFILE.firstName,
              familyName: PROFILE.lastName,
              jobTitle: PROFILE.title,
              description: PROFILE.about.split("\n\n")[0],
              email: PROFILE.contact.email,
              telephone: PROFILE.contact.phone,
              url: siteUrl,
              image: ogImage,
              sameAs: [
                PROFILE.socials.github,
                PROFILE.socials.linkedin,
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dehiwala",
                addressRegion: "Western Province",
                addressCountry: "LK",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "University of Moratuwa",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Moratuwa",
                    addressCountry: "LK",
                  },
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Curtin University",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Perth",
                    addressCountry: "AU",
                  },
                },
              ],
              knowsAbout: [
                "Software Engineering",
                "Cloud Computing",
                "AWS",
                "Microservices",
                "DevOps",
                "React",
                "Next.js",
                "TypeScript",
                "Go",
                "Python",
                "Data Science",
                "Machine Learning",
                "Kubernetes",
                "Docker",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "AWS Academy Graduate – Cloud Data Pipeline Builder",
                  credentialCategory: "certificate",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Amazon Web Services",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "AWS Academy Graduate – Data Engineering",
                  credentialCategory: "certificate",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Amazon Web Services",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider> */}
          <Navigation />
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

import type React from "react"
import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vyuapp.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a202c" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "VyuApp - Innovative Technology Solutions | Web & Mobile Development",
    template: "%s | VyuApp",
  },
  description:
    "VyuApp delivers cutting-edge web development, mobile apps, and digital solutions for modern businesses. Expert fintech-grade design and scalable architecture.",
  keywords: [
    "web development",
    "mobile app development",
    "Next.js",
    "React",
    "fintech",
    "software development",
    "UI/UX design",
    "digital solutions",
    "custom web applications",
    "technology consulting",
  ],
  authors: [
    {
      name: "VyuApp",
      url: siteUrl,
    },
  ],
  creator: "VyuApp",
  publisher: "VyuApp",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "VyuApp",
    title: "VyuApp - Innovative Technology Solutions",
    description:
      "Professional web and mobile development services with fintech-grade design",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "VyuApp - Technology Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VyuApp - Innovative Technology Solutions",
    description: "Professional web and mobile development services",
    creator: "@VyuApp",
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  applicationName: "VyuApp",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VyuApp",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0052FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="VyuApp" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={dmSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VyuApp",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description:
                "Innovative technology solutions for modern businesses",
              foundingDate: "2020",
              sameAs: [
                "https://twitter.com/VyuApp",
                "https://linkedin.com/company/vyuapp",
                "https://github.com/VyuApp",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "vyuapp@proton.me",
                telephone: "+62-819-3298-9898",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Jl. Ratu Indah Dewata, Perum Griya Mutiara Rancabango Blok C.40",
                addressLocality: "Tarogong Kaler",
                addressRegion: "Jawa Barat",
                postalCode: "44151",
                addressCountry: "ID",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

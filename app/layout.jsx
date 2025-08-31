import "./globals.css";

export const metadata = {
  title: {
    default: "Aptcode | Web and App Dev studio",
    template: "%s | Aptcode",
  },
  description:
    "Aptcode provides precision-engineered digital solutions, custom software development, web applications, and technology consulting services for businesses of all sizes.",
  keywords: [
    "Aptcode",
    "digital solutions",
    "software development",
    "web development",
    "custom applications",
    "technology consulting",
    "precision engineering",
    "business solutions",
  ],
  authors: [{ name: "Aptcode Team" }],
  creator: "Aptcode",
  publisher: "Aptcode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aptcode.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aptcode - Solutions Engineered with Precision",
    description:
      "Precision-engineered digital solutions for your business needs. Custom software development, web applications, and technology consulting.",
    url: "https://aptcode.com", // Replace with your actual domain
    siteName: "Aptcode",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Aptcode - Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptcode - Solutions Engineered with Precision",
    description:
      "Precision-engineered digital solutions for your business needs.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@aptcode", // Replace with your Twitter handle
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
  verification: {
    google: "_Y6WuoLhRnltszPurcSubPPC9IrzgmgW8jiX9U0kTZg",
     // Replace with actual verification code
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aptcode",
              description:
                "Precision-engineered digital solutions for your business needs. Custom software development, web applications, and technology consulting.",
              url: "https://aptcode.in", // Replace with your actual domain
              logo: "https://aptcode.in/logo.png", // Replace with your logo URL
              sameAs: [
                // Add your social media profiles
                "https://linkedin.com/company/aptcode",
                "https://instagram.com/aptcode.sol",
                "https://github.com/AptcodeSol",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
            }),
          }}
        />
      </head>
      <body className="bg-black text-white px-2">{children}</body>
    </html>
  );
}

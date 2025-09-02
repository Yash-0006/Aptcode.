import "./globals.css";

export const metadata = {
  title: {
    default: "Aptcode | Web & App Development Studio",
    template: "%s | Aptcode",
  },
  description:
    "Aptcode provides precision-engineered digital solutions, specializing in web development, mobile app development, and custom software for small to mid-sized businesses. We not only build your dream solution but also help you learn and grow with technology.",
  keywords: [
    "Aptcode",
    "web development",
    "mobile app development",
    "custom solutions",
    "software development",
    "digital solutions",
    "technology consulting",
    "business solutions",
    "AI SEO",
  ],
  authors: [{ name: "Aptcode Team" }],
  creator: "Aptcode",
  publisher: "Aptcode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.aptcode.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aptcode - Web & App dev Studio",
    description:
      "We build custom websites, mobile apps, and software solutions tailored for small and mid-sized businesses. Aptcode engineers your ideas into reality while helping you learn and adapt to technology.",
    url: "https://www.aptcode.in",
    siteName: "Aptcode",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "Aptcode - Web & App dev Studio",
    description:
      "We deliver custom websites, mobile apps, and tailored technology solutions to grow your business.",
    images: ["/twitter-image.jpg"],
    creator: "@aptcode", // replace with actual handle
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
    google: "_Y6WuoLhRnltszPurcSubPPC9IrzgmgW8jiX9U0kTZg", // replace with your code
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Core SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Aptcode." />
        <link rel="manifest" href="/site.webmanifest" />
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aptcode",
              url: "https://www.aptcode.in",
              logo: "https://www.aptcode.in/logo.png",
              description:
                "Aptcode delivers precision-engineered digital solutions — web development, mobile app development, and custom software for small to mid-sized businesses.",
              sameAs: [
                "https://linkedin.com/company/aptcode",
                "https://instagram.com/aptcode.sol",
                "https://github.com/AptcodeSol",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@aptcode.in",
                contactType: "Customer Service",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        {/* JSON-LD: Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Aptcode",
              url: "https://www.aptcode.in",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.aptcode.in/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* JSON-LD: Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Web Development",
                provider: { "@type": "Organization", name: "Aptcode", url: "https://www.aptcode.in" },
                areaServed: { "@type": "Place", name: "India" },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Mobile App Development",
                provider: { "@type": "Organization", name: "Aptcode", url: "https://www.aptcode.in" },
                areaServed: { "@type": "Place", name: "India" },
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Custom Solutions for Small to Mid Businesses",
                description:
                  "We build custom solutions and also guide clients to learn and understand technology while creating their dream website or app.",
                provider: { "@type": "Organization", name: "Aptcode", url: "https://www.aptcode.in" },
                areaServed: { "@type": "Place", name: "India" },
              },
            ]),
          }}
        />

        {/* JSON-LD: FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What do we do at Aptcode?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "At Aptcode, we provide web development, app development, and custom solutions for small to mid-sized businesses. We also ensure our clients learn and understand the technology while building their dream projects.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What do we charge?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our pricing depends on the project requirements. You can email us at contact@aptcode.in to book a free consultation about your business needs, with no obligation to take our service.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Aptcode about?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aptcode is a digital solutions studio focused on precision-engineered technology. We help businesses grow with websites, mobile apps, and custom solutions, while ensuring transparency and knowledge sharing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with international clients?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Aptcode works with clients across the globe. We specialize in providing scalable and affordable technology solutions remotely.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white px-2">{children}</body>
    </html>
  );
}

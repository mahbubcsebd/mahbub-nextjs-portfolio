import { Inter } from 'next/font/google';

import './globals.css';

export async function generateMetadata() {
  // Demo data for developer portfolio
  const demoData = {
      title: "Mahbubur Rahman | Full Stack Developer",
      footer_description: "Professional web developer specializing in React, Next.js, Node.js, and modern web technologies. Building performant and accessible web applications.",
      website: "https://mahbubur.dev",
      header_logo: "/logo.png",
      fev_icon: "/favicon.ico"
  };

  // Generate keywords from title and description
  const generateKeywords = (text) => {
      return (
          text
              ?.toLowerCase()
              ?.replace(/[^a-z0-9\s]/g, '')
              ?.split(/\s+/)
              ?.filter((word) => word?.length > 2)
              ?.join(', ') || ''
      );
  };

  const titleKeywords = generateKeywords(demoData.title);
  const descKeywords = generateKeywords(demoData.footer_description);
  const currentDate = new Date().toISOString();

  return {
      title: {
          default: demoData.title,
          template: `%s | ${demoData.title}`,
      },
      description: demoData.footer_description,
      keywords: `${titleKeywords}, ${descKeywords}, web developer, portfolio, react developer, next.js, node.js, full stack developer, bangladesh developer`,

      metadataBase: new URL(demoData.website),

      openGraph: {
          title: demoData.title,
          description: demoData.footer_description,
          url: demoData.website,
          type: "website",
          locale: "en_US",
          images: [
              {
                  url: demoData.header_logo,
                  width: 1200,
                  height: 630,
                  alt: demoData.title,
              },
              {
                  url: "/og-image.png", // Additional portfolio screenshot
                  width: 1200,
                  height: 630,
                  alt: "Mahbubur Rahman's Portfolio Projects",
              }
          ],
          siteName: demoData.title,
      },

      twitter: {
          card: "summary_large_image",
          title: demoData.title,
          description: demoData.footer_description,
          images: [demoData.header_logo, "/twitter-card.png"],
          creator: "@mahbubur_dev",
      },

      alternates: {
          canonical: demoData.website,
      },

      robots: {
          index: true,
          follow: true,
          nocache: false, // Changed to false for portfolio
          googleBot: {
              index: true,
              follow: true,
              'max-image-preview': 'large',
              'max-video-preview': -1,
              'max-snippet': -1,
          },
      },

      verification: {
          google: 'google-site-verification=yourcode',
          yandex: 'yandex-verification=yourcode',
      },

      icons: {
          icon: demoData.fev_icon,
          shortcut: demoData.fev_icon,
          apple: "/apple-touch-icon.png",
          other: [
              {
                  rel: "apple-touch-icon-precomposed",
                  url: "/apple-touch-icon.png",
              },
              {
                  rel: "mask-icon",
                  url: "/safari-pinned-tab.svg",
                  color: "#5bbad5",
              }
          ],
      },

      other: {
          'msapplication-TileColor': '#2b5797',
          'msapplication-TileImage': '/mstile-144x144.png',
          'theme-color': '#ffffff',
          'og:site_name': demoData.title,
          'og:type': 'website',
          'og:locale': 'en_US',
          'article:author': 'Mahbubur Rahman',

          // Tech stack meta
          'x-stack': 'React, Next.js, Node.js, TypeScript',
          'x-location': 'Dhaka, Bangladesh',

          // Rich Results
          'profile:first_name': 'Mahbubur',
          'profile:last_name': 'Rahman',
          'profile:username': 'mahbubur_dev',
      },
  };
}


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={`antialiased bg-[#f5f5f5] dark:bg-[#0a0e1f] ${inter.className}`}>
              {children}
          </body>
      </html>
  );
}

// app/layout.js (or layout.tsx)
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Use CSS variable for stability

export async function generateMetadata() {
  const demoData = {
    title: 'Mahbubur Rahman | Full Stack Developer',
    footer_description:
      'Professional web developer specializing in React, Next.js, Node.js, and modern web technologies. Building performant and accessible web applications.',
    website: 'https://mahbubur.dev',
    header_logo: '/logo.png',
    fev_icon: '/favicon.ico',
  };

  const generateKeywords = (text) =>
    text
      ?.toLowerCase()
      ?.replace(/[^a-z0-9\s]/g, '')
      ?.split(/\s+/)
      ?.filter((word) => word.length > 2)
      ?.join(', ') || '';

  const titleKeywords = generateKeywords(demoData.title);
  const descKeywords = generateKeywords(demoData.footer_description);

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
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: demoData.header_logo,
          width: 1200,
          height: 630,
          alt: demoData.title,
        },
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: "Mahbubur Rahman's Portfolio Projects",
        },
      ],
      siteName: demoData.title,
    },

    twitter: {
      card: 'summary_large_image',
      title: demoData.title,
      description: demoData.footer_description,
      images: [demoData.header_logo, '/twitter-card.png'],
      creator: '@mahbubur_dev',
    },

    alternates: {
      canonical: demoData.website,
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
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
      apple: '/apple-touch-icon.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon.png',
        },
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
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
      'x-stack': 'React, Next.js, Node.js, TypeScript',
      'x-location': 'Dhaka, Bangladesh',
      'profile:first_name': 'Mahbubur',
      'profile:last_name': 'Rahman',
      'profile:username': 'mahbubur_dev',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      {/* Do NOT include dynamic theme or fonts directly on <body> to reduce mismatch */}
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-[#f4f4f4] text-text-gray-900 dark:bg-[#0a0e1f] dark:text-white antialiased font-sans">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

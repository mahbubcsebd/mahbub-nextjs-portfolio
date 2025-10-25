// app/layout.js (or layout.tsx)
import ChatBot from '@/components/ChatBot';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Use CSS variable for stability

export async function generateMetadata() {
  const professionalProfile = {
    personalInfo: {
      fullName: 'Mahbubur Rahman',
      firstName: 'Mahbubur',
      lastName: 'Rahman',
      jobTitle: 'Full Stack Developer',
      location: 'Dhaka, Bangladesh',
      email: 'contact@mahbub-dev.vercel.app',
      gender: 'male',
    },
    professionalDetails: {
      specialization: 'React, Next.js, Node.js Specialist',
      techStack: 'React, Next.js, Node.js, TypeScript',
      employmentStatus: 'Software Engineer',
      yearsOfExperience: '4+ years',
    },
    siteConfig: {
      siteTitle: 'Mahbubur Rahman | Full Stack Developer Portfolio',
      siteDescription:
        'Professional web developer specializing in React, Next.js, Node.js, and modern web technologies. Building performant and accessible web applications.',
      siteUrl: 'https://mahbub-dev.vercel.app',
      canonicalUrl: 'https://mahbub-dev.vercel.app',
      twitterHandle: '@mahbubur_dev',
    },
    assets: {
      logo: {
        url: '/logo.svg',
        dimensions: { width: 1200, height: 630 },
      },
      favicon: '/favicon.ico',
      profileImage: {
        url: '/mahbub.png',
        dimensions: { width: 1200, height: 1200 },
      },
      openGraphImage: {
        url: '/og-image.png',
        dimensions: { width: 1200, height: 630 },
      },
      twitterCardImage: '/twitter-card.png',
      appleTouchIcon: '/apple-touch-icon.png',
      safariPinnedTab: {
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      msTileImage: '/mstile-144x144.png',
    },
    verification: {
      google: 'google-site-verification=yourcode',
      yandex: 'yandex-verification=yourcode',
    },
    uiSettings: {
      themeColor: '#ffffff',
      msTileColor: '#2b5797',
    },
  };

  const generateSearchKeywords = (text) =>
    text
      ?.toLowerCase()
      ?.replace(/[^a-z0-9\s]/g, '')
      ?.split(/\s+/)
      ?.filter((word) => word.length > 2)
      ?.join(', ') || '';

  const titleKeywords = generateSearchKeywords(
    professionalProfile.siteConfig.siteTitle
  );
  const descKeywords = generateSearchKeywords(
    professionalProfile.siteConfig.siteDescription
  );

  return {
    metadataBase: new URL(professionalProfile.siteConfig.siteUrl),

    title: {
      default: professionalProfile.siteConfig.siteTitle,
      template: `%s | ${professionalProfile.personalInfo.fullName}`,
    },

    description: professionalProfile.siteConfig.siteDescription,

    keywords: [
      titleKeywords,
      descKeywords,
      `${professionalProfile.personalInfo.jobTitle.toLowerCase()} portfolio`,
      `${professionalProfile.professionalDetails.techStack
        .split(',')[0]
        .trim()} developer`,
      ...professionalProfile.professionalDetails.techStack
        .split(',')
        .map((tech) => `${tech.trim()} developer`),
      'web development',
      'software engineer',
      `${professionalProfile.personalInfo.location
        .split(',')[0]
        .trim()} developer`,
    ].join(', '),

    openGraph: {
      title: professionalProfile.siteConfig.siteTitle,
      description: professionalProfile.siteConfig.siteDescription,
      url: professionalProfile.siteConfig.siteUrl,
      type: 'profile',
      locale: 'en_US',
      siteName: professionalProfile.siteConfig.siteTitle,
      images: [
        {
          url: professionalProfile.assets.profileImage.url,
          width: professionalProfile.assets.profileImage.dimensions.width,
          height: professionalProfile.assets.profileImage.dimensions.height,
          alt: `${professionalProfile.personalInfo.fullName}'s Profile Picture`,
        },
        {
          url: professionalProfile.assets.logo.url,
          width: professionalProfile.assets.logo.dimensions.width,
          height: professionalProfile.assets.logo.dimensions.height,
          alt: `${professionalProfile.personalInfo.fullName}'s Logo`,
        },
        {
          url: professionalProfile.assets.openGraphImage.url,
          width: professionalProfile.assets.openGraphImage.dimensions.width,
          height: professionalProfile.assets.openGraphImage.dimensions.height,
          alt: `${professionalProfile.personalInfo.fullName}'s Portfolio Showcase`,
        },
      ],
      profile: {
        firstName: professionalProfile.personalInfo.firstName,
        lastName: professionalProfile.personalInfo.lastName,
        username: professionalProfile.siteConfig.siteUrl.replace(
          /^https?:\/\//,
          ''
        ),
        gender: professionalProfile.personalInfo.gender,
      },
    },

    twitter: {
      card: 'summary_large_image',
      title: professionalProfile.siteConfig.siteTitle,
      description: professionalProfile.siteConfig.siteDescription,
      images: [
        professionalProfile.assets.profileImage.url,
        professionalProfile.assets.logo.url,
        professionalProfile.assets.twitterCardImage,
      ],
      creator: professionalProfile.siteConfig.twitterHandle,
      site: professionalProfile.siteConfig.twitterHandle,
    },

    alternates: {
      canonical: professionalProfile.siteConfig.canonicalUrl,
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

    verification: professionalProfile.verification,

    icons: {
      icon: professionalProfile.assets.favicon,
      shortcut: professionalProfile.assets.favicon,
      apple: professionalProfile.assets.appleTouchIcon,
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: professionalProfile.assets.appleTouchIcon,
        },
        {
          rel: 'mask-icon',
          url: professionalProfile.assets.safariPinnedTab.url,
          color: professionalProfile.assets.safariPinnedTab.color,
        },
      ],
    },

    authors: [
      {
        name: professionalProfile.personalInfo.fullName,
        url: professionalProfile.siteConfig.siteUrl,
      },
    ],

    other: {
      'msapplication-TileColor': professionalProfile.uiSettings.msTileColor,
      'msapplication-TileImage': professionalProfile.assets.msTileImage,
      'theme-color': professionalProfile.uiSettings.themeColor,
      'article:author': professionalProfile.personalInfo.fullName,
      'x-professional-stack': professionalProfile.professionalDetails.techStack,
      'x-professional-location': professionalProfile.personalInfo.location,
      'x-professional-status':
        professionalProfile.professionalDetails.employmentStatus,
      'x-professional-experience':
        professionalProfile.professionalDetails.yearsOfExperience,
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
            <ChatBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

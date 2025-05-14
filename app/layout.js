import { Inter } from 'next/font/google';

import './globals.css';

export const metadata = {
    title: 'Mahbub | Software Engineer',
    description: 'Portfolio showcasing my projects, experience, and blog.',
    openGraph: {
      title: 'Mahbub Portfolio',
      description: 'Built with Next.js 15',
      url: 'https://mahbub.dev',
      images: ['/og-image.png'],
    },
  };


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

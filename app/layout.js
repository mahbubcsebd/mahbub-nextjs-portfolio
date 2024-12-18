import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/provider/ThemeProvider';
import './globals.css';
// import useDictionary from './hooks/useDictionary';

export const metadata = {
    title: 'ChatGPT',
    description: 'I"m Mahbubur Rahman. I am a software engineer and a passionate learner.',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className={`antialiased bg-[#f5f5f5] dark:bg-[#0a0e1f]`}>
              <LanguageProvider>
                  <ThemeProvider
                      attribute="class"
                      defaultTheme="system"
                      enableSystem
                      disableTransitionOnChange
                  >
                      {children}
                  </ThemeProvider>
              </LanguageProvider>
          </body>
      </html>
  );
}

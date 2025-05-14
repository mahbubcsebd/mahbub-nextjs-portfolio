import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/provider/ThemeProvider'

const RootLayout = ({children}) => {
  return (
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
  )
}

export default RootLayout
import type {Metadata} from "next"
import "./globals.css"
import {ThemeProvider} from "next-themes"
import {Inter} from "next/font/google"
import {I18nProvider} from "@/lib/i18n/provider"
const inter = Inter({ subsets: ["latin", "cyrillic"] })
export const metadata: Metadata = {
    title: {default: "WikiVerse", template: "%s | WikiVerse"},
    description: "WikiVerse — вселенная игровых вики. Исследуй миры, персонажей и истории любимых игр и аниме в одном месте."
}
export default function RootLayout({children}: {children: React.ReactNode}) {
    return(
        <html lang="ru" suppressHydrationWarning>
            <body className={inter.className}>
                <I18nProvider>
                    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
                        <div className="min-h-screen bg-background font-sans antialiased flex flex-col pb-16 md:pb-0">
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nProvider>
            </body>
        </html>
    )
}
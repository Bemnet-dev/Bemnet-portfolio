import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono'
})

export const metadata: Metadata = {
    title: 'Bemnet Yitagesu - Full Stack Developer',
    description: 'Portfolio website of Bemnet Yitagesu, a passionate full-stack developer specializing in modern web technologies.',
    keywords: ['Bemnet Yitagesu', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
    authors: [{ name: 'Bemnet Yitagesu' }],
    creator: 'Bemnet Yitagesu',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://bemnet-portfolio.com',
        title: 'Bemnet Yitagesu - Full Stack Developer',
        description: 'Portfolio website of Bemnet Yitagesu, a passionate full-stack developer.',
        siteName: 'Bemnet Yitagesu Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bemnet Yitagesu - Full Stack Developer',
        description: 'Portfolio website of Bemnet Yitagesu, a passionate full-stack developer.',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                const theme = localStorage.getItem('theme') || 'dark';
                                if (theme === 'dark') {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                            } catch (e) {}
                        `,
                    }}
                />
            </head>
            <body className={`${inter.className} ${jetbrainsMono.variable}`}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
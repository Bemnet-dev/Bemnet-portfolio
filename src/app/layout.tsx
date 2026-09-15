import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono'
})
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500', '700'],
    variable: '--font-montserrat'
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 5.0,
    themeColor: '#000000',
}

export const metadata: Metadata = {
    title: 'Bemnet Yitagesu | Full Stack Developer & Mobile App Developer',
    description: 'Bemnet Yitagesu is a full-stack developer specializing in web and mobile app development. Building digital experiences with React, Next.js, React Native, and Expo.',
    keywords: [
        'Bemnet Yitagesu',
        'Full Stack Developer',
        'Mobile App Developer',
        'React',
        'Next.js',
        'React Native',
        'Expo',
        'TypeScript',
        'Web Development',
        'Portfolio',
        'Webflow Development',
        'UI/UX Design'
    ],
    authors: [{ name: 'Bemnet Yitagesu', url: 'https://bemnet-portfolio.com' }],
    creator: 'Bemnet Yitagesu',
    publisher: 'Bemnet Yitagesu',
    icons: {
        icon: '/favicon.ico',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://bemnet-portfolio.com',
        siteName: 'Bemnet Yitagesu Portfolio',
        title: 'Bemnet Yitagesu | Full Stack Developer & Mobile App Developer',
        description: 'Portfolio of Bemnet Yitagesu - Full Stack Developer specializing in web and mobile applications',
        images: [
            {
                url: 'https://bemnet-portfolio.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Bemnet Yitagesu Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bemnet Yitagesu | Full Stack Developer & Mobile App Developer',
        description: 'Portfolio of Bemnet Yitagesu - Full Stack Developer specializing in web and mobile applications',
        creator: '@bemnetyitagesu',
        images: ['https://bemnet-portfolio.com/og-image.png'],
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
                            if (typeof window !== 'undefined') {
                                window.addEventListener('error', function(e) {
                                    var msg = (e && e.message) || '';
                                    if (msg.indexOf('Loading chunk') !== -1 || msg.indexOf('ChunkLoadError') !== -1) {
                                        var retryKey = 'chunk_reload_count';
                                        var count = parseInt(sessionStorage.getItem(retryKey) || '0', 10);
                                        if (count < 2) {
                                            sessionStorage.setItem(retryKey, (count + 1).toString());
                                            window.location.reload();
                                        }
                                    }
                                });
                            }
                        `,
                    }}
                />
            </head>
            <body className={`${inter.className} ${jetbrainsMono.variable} ${montserrat.variable}`} suppressHydrationWarning>
                {children}
            </body>
        </html>
    )
}
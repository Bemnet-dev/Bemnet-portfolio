import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google'
import './globals.css'
import AcrylicBackground from '@/components/AcrylicBackground'

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
    metadataBase: new URL('https://bemnet-portfolio.com'),
    title: {
        default: 'Bemnet Yitagesu | Full-Stack Developer & UI/UX Designer',
        template: '%s | Bemnet Yitagesu',
    },
    description: 'Bemnet Yitagesu is a full-stack developer and creative designer crafting high-performance web applications, fluid motion experiences, and bespoke digital interfaces.',
    keywords: [
        'Bemnet Yitagesu',
        'Full Stack Developer',
        'UI/UX Designer',
        'Creative Developer',
        'React',
        'Next.js',
        'TypeScript',
        'React Native',
        'Tailwind CSS',
        'Web Architecture',
        'Frontend Engineer',
        'Portfolio'
    ],
    authors: [{ name: 'Bemnet Yitagesu', url: 'https://bemnet-portfolio.com' }],
    creator: 'Bemnet Yitagesu',
    publisher: 'Bemnet Yitagesu',
    category: 'technology',
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: '/icon',
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
        title: 'Bemnet Yitagesu | Full-Stack Developer & UI/UX Designer',
        description: 'Portfolio of Bemnet Yitagesu — Full-stack developer & creative designer building resilient web applications and fluid digital experiences.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bemnet Yitagesu | Full-Stack Developer & UI/UX Designer',
        description: 'Portfolio of Bemnet Yitagesu — Full-stack developer & creative designer building resilient web applications and fluid digital experiences.',
        creator: '@bemnetyitagesu',
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': 'https://bemnet-portfolio.com/#person',
            name: 'Bemnet Yitagesu',
            jobTitle: 'Full-Stack Developer & UI/UX Designer',
            url: 'https://bemnet-portfolio.com',
            sameAs: [
                'https://github.com/Bemnet-dev',
                'https://www.linkedin.com/in/bemnet-developer/'
            ],
            description: 'Full-stack developer & creative designer building high-performance web applications, fluid motion experiences, and thoughtful digital interfaces.',
            knowsAbout: [
                'Next.js',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'React Native',
                'Node.js',
                'UI/UX Design',
                'Web Performance',
                'Full-Stack Development'
            ],
            email: 'bemnet.important@gmail.com'
        },
        {
            '@type': 'WebSite',
            '@id': 'https://bemnet-portfolio.com/#website',
            url: 'https://bemnet-portfolio.com',
            name: 'Bemnet Yitagesu Portfolio',
            description: 'Official portfolio website of Bemnet Yitagesu, showcasing full-stack projects, design services, and technical expertise.',
            publisher: {
                '@id': 'https://bemnet-portfolio.com/#person'
            },
            inLanguage: 'en-US'
        },
        {
            '@type': 'ProfilePage',
            '@id': 'https://bemnet-portfolio.com/#profilepage',
            url: 'https://bemnet-portfolio.com',
            name: 'Bemnet Yitagesu Profile',
            isPartOf: {
                '@id': 'https://bemnet-portfolio.com/#website'
            },
            mainEntity: {
                '@id': 'https://bemnet-portfolio.com/#person'
            }
        }
    ]
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
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
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
            <body className={`${inter.className} ${jetbrainsMono.variable} ${montserrat.variable} bg-black text-white relative min-h-screen`} suppressHydrationWarning>
                <AcrylicBackground />
                {children}
            </body>
        </html>
    )
}
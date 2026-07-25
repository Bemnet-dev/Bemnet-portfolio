import { Metadata } from 'next'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants'

export function generateMetadata(
    title: string,
    description: string,
    path: string = ''
): Metadata {
    const fullUrl = `${SITE_URL}${path}`
    const fullTitle = `${title} | ${SITE_NAME}`

    return {
        title: fullTitle,
        description,
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: fullUrl,
            siteName: SITE_NAME,
            title: fullTitle,
            description,
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
        },
        alternates: {
            canonical: fullUrl,
        },
    }
}

export const createStructuredData = (
    type: string,
    data: Record<string, any>
) => {
    return {
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
    }
}

export const personSchema = createStructuredData('Person', {
    name: 'Bemnet Yitagesu',
    url: SITE_URL,
    sameAs: [
        'https://github.com/bemnet884',
        'https://linkedin.com/in/bemnet-yitagesu',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
        '@type': 'Organization',
        name: 'Bemnet Yitagesu',
    },
})

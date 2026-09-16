import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bemnet Yitagesu Portfolio',
    short_name: 'Bemnet Portfolio',
    description:
      'Full-stack developer & creative designer portfolio showcasing production web applications and UI/UX design.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#030712',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  }
}

# Project Structure - Bemnet Yitagesu Portfolio

## Overview
Modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. Features animated backgrounds, parallax scrolling, and full SEO optimization.

## Directory Structure

```
bemnet-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   ├── page.tsx             # Main homepage
│   │   ├── globals.css          # Global styles
│   │   ├── loading.tsx          # Loading skeleton
│   │   └── not-found.tsx        # 404 page
│   │
│   ├── components/
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Hero section
│   │   ├── Projects.tsx         # Projects showcase
│   │   ├── Services.tsx         # Services grid
│   │   ├── About.tsx            # About section
│   │   ├── Skills.tsx           # Skills & stats
│   │   ├── Contact.tsx          # Contact form
│   │   ├── Footer.tsx           # Footer
│   │   ├── Logo.tsx             # Logo component
│   │   ├── Counter.tsx          # Animated counter
│   │   ├── AnimatedBackground.tsx # Three.js background
│   │   └── ParallaxSection.tsx   # Parallax utilities
│   │
│   ├── hooks/
│   │   └── useScrollToSection.ts # Scroll navigation hook
│   │
│   ├── lib/
│   │   ├── constants.ts         # App constants
│   │   ├── types.ts             # TypeScript types
│   │   └── seo.ts               # SEO utilities
│   │
│   └── utils/
│       └── (utilities folder)
│
├── public/
│   ├── favicon.jpg              # Site favicon
│   ├── robots.txt               # SEO robots file
│   └── sitemap.xml              # XML sitemap
│
├── Configuration Files
│   ├── next.config.js           # Next.js config
│   ├── tailwind.config.js       # Tailwind CSS config
│   ├── tsconfig.json            # TypeScript config
│   ├── postcss.config.js        # PostCSS config
│   ├── .eslintrc.json           # ESLint config
│   ├── package.json             # Dependencies
│   └── .gitignore               # Git ignore rules
│
└── Documentation
    ├── README.md                # Main readme
    ├── STRUCTURE.md             # This file
    └── RESPONSIVE_UPDATES.md    # Responsive design docs
```

## Technology Stack

### Frontend
- **Framework**: Next.js 15.0.3
- **React**: 19.0.0
- **TypeScript**: 5.7.2
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js

### Dependencies
```json
{
  "framer-motion": "latest",
  "lucide-react": "latest",
  "three": "latest",
  "@types/three": "latest"
}
```

## Key Features

✅ **Responsive Design** - Mobile-first approach with breakpoints: sm, md, lg, xl
✅ **SEO Optimized** - Meta tags, structured data, robots.txt, sitemap
✅ **Animated Background** - Three.js WebGL wave animation
✅ **Parallax Scrolling** - Custom parallax effects on sections
✅ **Performance** - Image optimization, code splitting, lazy loading
✅ **Accessibility** - ARIA labels, semantic HTML, keyboard navigation
✅ **Modern UX** - Smooth animations, hover effects, micro-interactions

## File Organization Philosophy

### Components (`src/components/`)
- Each component is self-contained
- Exports default function component
- Responsive styling included
- Animation variants defined locally

### Hooks (`src/hooks/`)
- Reusable React hooks
- Business logic separation
- Named exports with `use` prefix

### Utilities (`src/lib/`)
- Constants and configuration
- Type definitions
- Helper functions
- SEO utilities

### Styles
- Global styles in `app/globals.css`
- Component-scoped Tailwind classes
- Dark mode support via CSS variables

## Development Guidelines

### Adding New Sections
1. Create component in `src/components/`
2. Add responsive styling with Tailwind
3. Import in `src/app/page.tsx`
4. Update navigation if needed

### Styling
- Use Tailwind CSS utility classes
- Responsive: `sm:`, `md:`, `lg:`, `xl:` prefixes
- Dark mode: included by default
- Custom theme colors in `tailwind.config.js`

### Type Safety
- Define interfaces in `src/lib/types.ts`
- Use strict TypeScript mode
- Avoid `any` types

### Performance
- Image optimization via Next.js Image component
- Dynamic imports for heavy components
- CSS-in-JS for animations (Framer Motion)
- Lazy loading for off-screen content

## SEO Configuration

### Meta Tags
- Configured in `src/app/layout.tsx`
- Title, description, keywords
- OpenGraph tags for social sharing
- Twitter card metadata

### Robots & Sitemap
- `public/robots.txt` - Controls crawler access
- `public/sitemap.xml` - XML sitemap for indexing
- Canonical URLs to prevent duplicates

### Structured Data
- Schema.org Person type for portfolio
- JSON-LD format in `src/lib/seo.ts`
- Enhanced search result snippets

## Deployment

### Build
```bash
npm run build
```

### Production Checklist
- [ ] Update canonical URLs in metadata
- [ ] Configure domain in environment variables
- [ ] Add OG images to public folder
- [ ] Test SEO with Google Search Console
- [ ] Verify robots.txt and sitemap
- [ ] Set up analytics
- [ ] Configure security headers

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Metrics
- Lighthouse Core Web Vitals optimized
- Responsive images with srcset
- CSS animations for smooth 60fps
- Minimal JavaScript bundle size

## Contributing
When modifying this project:
1. Maintain component structure
2. Follow responsive design pattern
3. Add TypeScript types
4. Update relevant documentation
5. Test on mobile, tablet, and desktop

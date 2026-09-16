# Bemnet Yitagesu - Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and an elegant design showcasing projects and skills.

## ✨ Features

- **Modern Design** - Clean, professional interface with smooth animations
- **Responsive** - Optimized for all devices and screen sizes
- **Dark Mode** - Toggle between light and dark themes
- **Performance** - Built with Next.js 14 for optimal loading speed
- **SEO Optimized** - Meta tags and structured data for search engines
- **Interactive** - Custom cursor effects and hover animations
- **Accessible** - WCAG compliant design patterns
- **Type Safe** - Full TypeScript implementation

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** WebGl
- **Icons:** Lucide React
- **Theme:** next-themes
- **Deployment:** Vercel (recommended)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/bemnet884/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0fdfa',
    // ... your custom colors
    900: '#134e4a',
  },
}
```

### Content
Update personal information in:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section details
- `src/components/Projects.tsx` - Project showcase
- `src/components/Contact.tsx` - Contact information

### Meta Data
Update SEO information in `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Developer',
  description: 'Your custom description',
  // ... other meta tags
}
```

### Other Platforms

The project uses static export, making it compatible with any static hosting service:
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** All green scores
- **Bundle Size:** Optimized with Next.js automatic code splitting

## 📞 Contact

**Bemnet Yitagesu**
- Email: bemnet.importnat@gmail.com
- LinkedIn: [bemnet-yitagesu](https://www.linkedin.com/in/bemnet-developer/)
- GitHub: [@bemnet884](https://github.com/Bemnet-dev)

---

Made with ❤️ and Next.js and WebGL

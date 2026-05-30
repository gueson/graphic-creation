# 🎨 Social Media Graphic Creator

> A professional graphic design tool for social media content creation. Create stunning images for Douyin, Xiaohongshu, WeChat, and more.

![GitHub](https://img.shields.io/github/license/gueson/graphic-creator)
![GitHub stars](https://img.shields.io/github/stars/gueson/graphic-creator)
![GitHub forks](https://img.shields.io/github/forks/gueson/graphic-creator)
![GitHub issues](https://img.shields.io/github/issues/gueson/graphic-creator)

## ✨ Features

- 📱 **Multi-platform Support** - Optimized for Douyin, Xiaohongshu, WeChat, Instagram, Facebook, Twitter, and more
- 🎯 **Precision Sizing** - Predefined canvas sizes for different social media platforms
- ✏️ **Rich Text Editing** - Support for 20+ popular fonts with customizable size, color, and alignment
- 🎨 **Background Customization** - Solid colors, gradients, and image backgrounds
- 🔖 **Watermark Feature** - Customizable text and image watermarks with adjustable position and opacity
- 💾 **High-Quality Export** - Export in HD or normal quality PNG format
- 🌍 **Internationalization** - Support for Chinese and English languages
- 🖥️ **Cross-device Compatible** - Works seamlessly on desktop and mobile browsers

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Internationalization**: Next Intl
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gueson/graphic-creator.git

# Navigate to the project directory
cd graphic-creator

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Running Tests

```bash
npm run test
```

## 📁 Project Structure

```
graphic-creator/
├── app/                      # Next.js App Router
│   ├── [locale]/             # Internationalized routes
│   │   ├── about/            # About page
│   │   ├── cookies/          # Cookie policy page
│   │   ├── faq/              # FAQ page
│   │   ├── privacy/          # Privacy policy page
│   │   ├── terms/            # Terms of service page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Main editor page
│   ├── robots.ts             # Robots.txt configuration
│   ├── sitemap.ts            # Sitemap configuration
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── EditorPanel/          # Editor settings panels
│   │   ├── BackgroundSettings.tsx
│   │   ├── ExportSettings.tsx
│   │   ├── SizeSettings.tsx
│   │   ├── TextSettings.tsx
│   │   └── WatermarkSettings.tsx
│   ├── legal/                # Legal page components
│   ├── Analytics.tsx         # Analytics integration
│   ├── ContactModal.tsx      # Contact modal
│   ├── CookieConsentBanner.tsx
│   ├── FullscreenPreview.tsx
│   ├── Header.tsx            # Navigation header
│   ├── LanguageSwitcher.tsx  # Language toggle
│   └── PreviewArea.tsx       # Canvas preview
├── hooks/                    # Custom hooks
│   ├── useEditorState.tsx    # Editor state management
│   ├── useExport.ts          # Export functionality
│   └── useCookieConsent.tsx  # Cookie consent management
├── i18n/                     # Internationalization
│   ├── request.ts            # Request handler
│   └── settings.ts           # i18n configuration
├── lib/                      # Utility functions
│   └── types.ts              # TypeScript types
├── messages/                 # Translation files
│   ├── en.json               # English translations
│   └── zh.json               # Chinese translations
├── public/                   # Static assets
│   └── images/               # Image resources
├── .gitignore
├── middleware.ts             # i18n middleware
├── next.config.js            # Next.js configuration
├── package.json
├── tailwind.config.js        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎯 Usage

1. **Select Platform**: Choose from popular social media platforms to set the canvas size
2. **Add Text**: Customize text content, font, size, color, and alignment
3. **Set Background**: Choose a color, gradient, or upload an image
4. **Add Watermark** (Optional): Enable and customize watermark settings
5. **Preview**: Use fullscreen preview to see the final result
6. **Export**: Download as HD or normal quality PNG

## 🌐 Supported Platforms

| Platform | Dimensions |
|----------|------------|
| Douyin | 1080 x 1920 |
| Xiaohongshu | 1080 x 1440 |
| WeChat Moments | 900 x 1200 |
| Instagram Post | 1080 x 1080 |
| Facebook Post | 1200 x 630 |
| Twitter/X Post | 1200 x 675 |
| YouTube Thumbnail | 1280 x 720 |
| Pinterest Pin | 1000 x 1500 |

## 🔧 Configuration

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Custom Fonts

Add custom fonts in `app/[locale]/layout.tsx`:

```tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

### Code Guidelines

- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful commit messages
- Add tests for new functionality

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Email**: gueson1989@163.com
- **GitHub**: [@gueson](https://github.com/gueson)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Next Intl](https://next-intl-docs.vercel.app/) - Internationalization

---

⭐ **If you find this project useful, please give it a star!**

---

## SEO Keywords

social media graphic creator, image editor, content creation tool, douyin graphic design, xiaohongshu editor, wechat image maker, nextjs graphic tool, react image editor, free graphic design, watermark tool, text overlay, canvas editor
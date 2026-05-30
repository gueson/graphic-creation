import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { CookieProvider } from '@/hooks/useCookieConsent';
import '../globals.css';

const locales = ['zh', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const direction = locale === 'zh' ? 'ltr' : 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Professional graphic creator for social media content. Create stunning images for Douyin, Xiaohongshu, WeChat and more." />
        <meta name="keywords" content="graphic creator, social media, design tool, image editor, text overlay" />
        <meta name="author" content="Graphic Creator" />
        <meta property="og:title" content="Graphic Creator - Social Media Graphic Tool" />
        <meta property="og:description" content="Create professional social media graphics with ease." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng:wght@400&family=Noto+Sans+SC:wght@400;700;900&family=Noto+Serif+SC:wght@400;700;900&family=ZCOOL+KuaiLe:wght@400&family=ZCOOL+QingKe+HuangYou:wght@400&family=ZCOOL+XiaoWei:wght@400&family=Montserrat:wght@400;700&family=Oswald:wght@400;700&family=Poppins:wght@400;700&family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
          media="screen"
        />
        <title>
          {locale === 'zh' ? '自媒体图文制作神器' : 'Graphic Creator'}
        </title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": locale === 'zh' ? '自媒体图文制作神器' : 'Social Media Graphic Creator',
              "description": locale === 'zh' 
                ? '一款专业的自媒体图文制作工具，支持多种社交平台尺寸，自定义字体、颜色、水印等功能。'
                : 'A professional graphic creator tool for social media content, supporting multiple platform sizes with customizable fonts, colors, and watermarks.',
              "url": "https://graphic-creator.example.com",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Person",
                "name": "Graphic Creator Developer",
                "email": "gueson1989@163.com"
              }
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
        <CookieProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </CookieProvider>
      </body>
    </html>
  );
}

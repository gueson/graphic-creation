'use client';

import React, { useEffect, Suspense, lazy } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { EditorProvider, useEditorState } from '@/hooks/useEditorState';
import { useExport } from '@/hooks/useExport';
import { Header } from '@/components/Header';
import { PreviewArea } from '@/components/PreviewArea';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';

const SizeSettings = lazy(() =>
  import('@/components/EditorPanel/SizeSettings').then((mod) => ({ default: mod.SizeSettings }))
);
const TextSettings = lazy(() =>
  import('@/components/EditorPanel/TextSettings').then((mod) => ({ default: mod.TextSettings }))
);
const BackgroundSettings = lazy(() =>
  import('@/components/EditorPanel/BackgroundSettings').then((mod) => ({ default: mod.BackgroundSettings }))
);
const WatermarkSettings = lazy(() =>
  import('@/components/EditorPanel/WatermarkSettings').then((mod) => ({ default: mod.WatermarkSettings }))
);
const ExportSettings = lazy(() =>
  import('@/components/EditorPanel/ExportSettings').then((mod) => ({ default: mod.ExportSettings }))
);
const FullscreenPreview = lazy(() =>
  import('@/components/FullscreenPreview').then((mod) => ({ default: mod.FullscreenPreview }))
);
const ContactModal = lazy(() =>
  import('@/components/ContactModal').then((mod) => ({ default: mod.ContactModal }))
);

function EditorContent() {
  const t = useTranslations();
  const locale = useLocale();
  const { state } = useEditorState();
  const { exportRef, handleExport } = useExport();
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const handleDownload = (quality: 'high' | 'normal' = 'high') => {
    handleExport(state, quality);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header
        onFullscreen={() => setIsFullscreen(true)}
        onContact={() => setIsContactOpen(true)}
        onDownload={() => handleDownload('high')}
      />

      <main className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-6">
          <Suspense fallback={<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />}>
            <SizeSettings />
          </Suspense>
          <Suspense fallback={<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />}>
            <TextSettings />
          </Suspense>
          <Suspense fallback={<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />}>
            <BackgroundSettings />
          </Suspense>
          <Suspense fallback={<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />}>
            <WatermarkSettings />
          </Suspense>
          <Suspense fallback={<div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />}>
            <ExportSettings onDownload={handleDownload} />
          </Suspense>
        </div>

        <div className="w-full md:w-2/3 lg:w-3/4">
          <PreviewArea exportRef={exportRef} />
        </div>
      </main>

      <footer className="mt-10 py-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t('footer.copyrightPrefix')} {new Date().getFullYear()}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {t('footer.compatible')} | {t('footer.noWatermark')}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href={`/${locale}/about`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('footer.about')}
              </Link>
              <Link
                href={`/${locale}/faq`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('footer.faq')}
              </Link>
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('footer.terms')}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <FullscreenPreview
        isOpen={isFullscreen}
        onClose={() => setIsFullscreen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <CookieConsentBanner />
    </div>
  );
}

export default function Page() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  );
}

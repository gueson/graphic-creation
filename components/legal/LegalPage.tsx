'use client';

import { useTranslations } from 'next-intl';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';

interface LegalPageProps {
  titleKey: string;
  lastUpdatedKey: string;
  children?: React.ReactNode;
}

export function LegalPage({ titleKey, lastUpdatedKey, children }: LegalPageProps) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}`}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{t(titleKey)}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8 prose dark:prose-invert max-w-none">
          {children}
        </article>
      </main>

      <footer className="mt-8 py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>{t('footer.copyrightPrefix')} {new Date().getFullYear()}</p>
      </footer>

      <CookieConsentBanner />
    </div>
  );
}

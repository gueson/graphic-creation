'use client';

import { useTranslations } from 'next-intl';
import { Eye, MessageSquare, Download } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  onFullscreen: () => void;
  onContact: () => void;
  onDownload: () => void;
}

export function Header({
  onFullscreen,
  onContact,
  onDownload,
}: HeaderProps) {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('header.title')}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={onFullscreen}
            className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-md group"
            aria-label={t('common.fullscreen')}
            title={t('common.fullscreen')}
          >
            <Eye className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </button>
          <button
            onClick={onContact}
            className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:shadow-md group"
            aria-label={t('common.contact')}
            title={t('common.contact')}
          >
            <MessageSquare className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </button>
          <button
            onClick={onDownload}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <Download className="w-4.5 h-4.5" />
            {t('header.download')}
          </button>
        </div>
      </div>
    </header>
  );
}

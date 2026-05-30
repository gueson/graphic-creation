'use client';

import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();

  const otherLocale = locale === 'zh' ? 'en' : 'zh';

  return (
    <button
      onClick={() => {
        window.location.href = `/${otherLocale}`;
      }}
      className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-all duration-200 shadow-sm hover:shadow-md"
    >
      {otherLocale === 'zh' ? '中文' : 'English'}
    </button>
  );
}

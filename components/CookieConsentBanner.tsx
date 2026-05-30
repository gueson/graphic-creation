'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Settings, X, Shield, Palette, Activity, ChevronDown, ChevronUp } from 'lucide-react';

export function CookieConsentBanner() {
  const t = useTranslations('cookieConsent');
  const locale = useLocale();
  const { hasConsent, acceptAll, acceptNecessary, preferences, updatePreferences } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);

  if (hasConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              {t('title')}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('description')}{' '}
              <Link
                href={`/${locale}/cookies`}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                {t('learnMore')}
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 justify-center"
            >
              <Settings className="w-4 h-4" />
              {showDetails ? t('hideDetails') : t('showDetails')}
              {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {t('acceptNecessary')}
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              {t('acceptAll')}
            </button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <CookieCategory
                title={t('categories.essential.title')}
                description={t('categories.essential.description')}
                icon={<Shield className="w-5 h-5 text-green-600" />}
                checked={preferences.essential}
                onChange={(checked) => updatePreferences({ essential: checked })}
                disabled
              />
              <CookieCategory
                title={t('categories.functional.title')}
                description={t('categories.functional.description')}
                icon={<Palette className="w-5 h-5 text-blue-600" />}
                checked={preferences.functional}
                onChange={(checked) => updatePreferences({ functional: checked })}
              />
              <CookieCategory
                title={t('categories.analytics.title')}
                description={t('categories.analytics.description')}
                icon={<Activity className="w-5 h-5 text-purple-600" />}
                checked={preferences.analytics}
                onChange={(checked) => updatePreferences({ analytics: checked })}
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {t('acceptNecessary')}
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                {t('acceptAll')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface CookieCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

function CookieCategory({ title, description, icon, checked, onChange, disabled = false }: CookieCategoryProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => onChange(e.target.checked)}
              disabled={disabled}
              className="sr-only peer"
            />
            <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${
              disabled 
                ? 'bg-blue-600 cursor-not-allowed'
                : checked 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 dark:bg-gray-500'
            } peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800`}>
              <div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform duration-200 ${
                checked ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </div>
          </label>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  );
}

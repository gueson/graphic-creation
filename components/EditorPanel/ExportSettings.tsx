'use client';

import { useTranslations } from 'next-intl';
import { useEditorState } from '@/hooks/useEditorState';

interface ExportSettingsProps {
  onDownload: (quality: 'high' | 'normal') => void;
}

export function ExportSettings({ onDownload }: ExportSettingsProps) {
  const t = useTranslations();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
      <h3 className="font-semibold mb-3">{t('editor.exportSettings')}</h3>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => onDownload('high')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
        >
          {t('editor.downloadHigh')}
        </button>
        <button
          onClick={() => onDownload('normal')}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium"
        >
          {t('editor.downloadNormal')}
        </button>
      </div>
    </div>
  );
}

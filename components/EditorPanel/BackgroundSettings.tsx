'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Palette, Image } from 'lucide-react';
import { useEditorState } from '@/hooks/useEditorState';

export function BackgroundSettings() {
  const t = useTranslations();
  const { state, dispatch } = useEditorState();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_BG_COLOR', payload: e.target.value });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        dispatch({ type: 'SET_BG_IMAGE', payload: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearBg = () => {
    dispatch({ type: 'SET_BG_IMAGE', payload: null });
  };

  const handleBgModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_BG_MODE', payload: e.target.value as any });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Palette className="w-4.5 h-4.5" />
        {t('editor.backgroundSettings')}
      </h3>

      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
            {t('editor.bgColor')}
          </label>
          <input
            type="color"
            value={state.bgColor}
            onChange={handleBgColorChange}
            className="w-full h-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent cursor-pointer"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
            {t('editor.uploadBg')}
          </label>
          <div className="flex gap-2">
            <button
              onClick={handleUploadClick}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Image className="w-4 h-4" />
              {t('editor.uploadBg')}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {state.bgImage && (
              <button
                onClick={handleClearBg}
                className="p-2 border border-red-300 dark:border-red-700 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                {t('editor.clearBg')}
              </button>
            )}
          </div>
        </div>

        {state.bgImage && (
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {t('editor.bgMode')}
            </label>
            <select
              value={state.bgMode}
              onChange={handleBgModeChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
            >
              <option value="cover">{t('editor.cover')}</option>
              <option value="contain">{t('editor.contain')}</option>
              <option value="repeat">{t('editor.repeat')}</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

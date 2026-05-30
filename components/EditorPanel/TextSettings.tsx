'use client';

import { useTranslations } from 'next-intl';
import { Type } from 'lucide-react';
import { fontOptions } from '@/lib/fonts';
import { useEditorState } from '@/hooks/useEditorState';

export function TextSettings() {
  const t = useTranslations();
  const { state, dispatch } = useEditorState();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'SET_TEXT', payload: e.target.value });
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_FONT', payload: e.target.value });
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FONT_SIZE', payload: parseInt(e.target.value) || 12 });
  };

  const handleFontColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_FONT_COLOR', payload: e.target.value });
  };

  const handleTextAlignChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_TEXT_ALIGN', payload: e.target.value as any });
  };

  const handleLineHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_LINE_HEIGHT', payload: parseFloat(e.target.value) || 1 });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Type className="w-4.5 h-4.5" />
        {t('editor.textSettings')}
      </h3>
      <textarea
        value={state.text}
        onChange={handleTextChange}
        placeholder={t('editor.placeholder')}
        className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-lg mb-3 bg-white dark:bg-gray-900 resize-none"
      />

      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
            {t('editor.font')}
          </label>
          <select
            value={state.font}
            onChange={handleFontChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
          >
            {fontOptions.map((option, index) => (
              <option key={index} value={option.value} style={{ fontFamily: option.fontFamily }}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {t('editor.fontSize')} (px)
            </label>
            <input
              type="number"
              min="12"
              max="120"
              value={state.fontSize}
              onChange={handleFontSizeChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {t('editor.textAlign')}
            </label>
            <select
              value={state.textAlign}
              onChange={handleTextAlignChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
            >
              <option value="left">{t('editor.left')}</option>
              <option value="center">{t('editor.center')}</option>
              <option value="right">{t('editor.right')}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {t('editor.fontColor')}
            </label>
            <input
              type="color"
              value={state.fontColor}
              onChange={handleFontColorChange}
              className="w-full h-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {t('editor.lineHeight')}
            </label>
            <input
              type="number"
              step="0.1"
              min="0.8"
              max="3"
              value={state.lineHeight}
              onChange={handleLineHeightChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

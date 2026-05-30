'use client';

import { useTranslations } from 'next-intl';
import { useEditorState } from '@/hooks/useEditorState';
import React from 'react';

const positionOptions = [
  { value: 'top-left', label: '左上' },
  { value: 'top-center', label: '上中' },
  { value: 'top-right', label: '右上' },
  { value: 'center-left', label: '左中' },
  { value: 'center', label: '居中' },
  { value: 'center-right', label: '右中' },
  { value: 'bottom-left', label: '左下' },
  { value: 'bottom-center', label: '下中' },
  { value: 'bottom-right', label: '右下' },
] as const;

export function WatermarkSettings() {
  const t = useTranslations();
  const { state, dispatch } = useEditorState();
  const { watermark } = state;
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (key: keyof typeof watermark, value: any) => {
    dispatch({
      type: 'UPDATE_WATERMARK',
      payload: { ...watermark, [key]: value },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      handleChange('imageUrl', result);
    };
    reader.readAsDataURL(file);
  };

  const handleClearImage = () => {
    handleChange('imageUrl', null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isLocalImage = watermark.imageUrl?.startsWith('data:') || false;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {t('watermark.title')}
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={watermark.enabled}
              onChange={(e) => handleChange('enabled', e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            {t('watermark.enabled')}
          </label>
        </div>

        {watermark.enabled && (
          <>
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('watermark.text')}
                </label>
                <input
                  type="text"
                  value={watermark.text}
                  onChange={(e) => handleChange('text', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('watermark.textPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('watermark.position')}
                </label>
                <select
                  value={watermark.position}
                  onChange={(e) => handleChange('position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {positionOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('watermark.textColor')}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={watermark.color}
                    onChange={(e) => handleChange('color', e.target.value)}
                    className="w-10 h-10 rounded cursor-pointer border border-gray-300 dark:border-gray-600"
                  />
                  <input
                    type="text"
                    value={watermark.color}
                    onChange={(e) => handleChange('color', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('watermark.fontSize')} ({watermark.fontSize}px)
                </label>
                <input
                  type="range"
                  min="12"
                  max="150"
                  value={watermark.fontSize}
                  onChange={(e) => handleChange('fontSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('watermark.opacity')} ({Math.round(watermark.opacity * 100)}%)
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.1"
                  value={watermark.opacity}
                  onChange={(e) => handleChange('opacity', parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t('watermark.imageWatermark')}
                </h4>
                
                {watermark.imageUrl ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={watermark.imageUrl}
                        alt="Watermark preview"
                        className="w-12 h-12 object-contain rounded border border-gray-300 dark:border-gray-600"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {isLocalImage ? '本地图片' : watermark.imageUrl}
                        </p>
                      </div>
                      <button
                        onClick={handleClearImage}
                        className="px-2 py-1 text-xs text-red-600 hover:bg-red-50 dark:hover:bg-red-900 rounded"
                      >
                        {t('watermark.clear')}
                      </button>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t('watermark.imageOpacity')} ({Math.round(watermark.imageOpacity * 100)}%)
                      </label>
                      <input
                        type="range"
                        min="0.1"
                        max="1"
                        step="0.1"
                        value={watermark.imageOpacity}
                        onChange={(e) => handleChange('imageOpacity', parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="watermark-file-input"
                    />
                    <label
                      htmlFor="watermark-file-input"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {t('watermark.uploadImage')}
                      </span>
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                      {t('watermark.supportedFormats')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

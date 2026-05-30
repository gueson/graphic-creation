'use client';

import { useTranslations } from 'next-intl';
import { ZoomIn } from 'lucide-react';
import { sizeOptions } from '@/lib/sizes';
import { useEditorState } from '@/hooks/useEditorState';

export function SizeSettings() {
  const t = useTranslations();
  const { state, dispatch } = useEditorState();

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'custom') {
      dispatch({
        type: 'SET_SIZE',
        payload: { ratio: 'custom', width: 0, height: 0 },
      });
    } else {
      const option = sizeOptions.find((o) => o.value === value);
      if (option) {
        dispatch({
          type: 'SET_SIZE',
          payload: { ratio: option.value, width: option.width, height: option.height },
        });
        dispatch({ type: 'SET_CUSTOM_WIDTH', payload: option.width });
        dispatch({ type: 'SET_CUSTOM_HEIGHT', payload: option.height });
      }
    }
  };

  const handleCustomWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_CUSTOM_WIDTH', payload: parseInt(e.target.value) || 100 });
  };

  const handleCustomHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_CUSTOM_HEIGHT', payload: parseInt(e.target.value) || 100 });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <ZoomIn className="w-4.5 h-4.5" />
        {t('editor.sizeSettings')}
      </h3>
      <select
        value={state.selectedSize.ratio}
        onChange={handleSizeChange}
        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-3 bg-white dark:bg-gray-900"
      >
        {sizeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {t(`editor.${option.labelKey}`)} ({option.value})
          </option>
        ))}
        <option value="custom">{t('editor.custom')}</option>
      </select>

      {state.selectedSize.ratio === 'custom' && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {t('editor.width')} (px)
            </label>
            <input
              type="number"
              min="100"
              max="4096"
              value={state.customWidth}
              onChange={handleCustomWidthChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">
              {t('editor.height')} (px)
            </label>
            <input
              type="number"
              min="100"
              max="4096"
              value={state.customHeight}
              onChange={handleCustomHeightChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900"
            />
          </div>
        </div>
      )}
    </div>
  );
}

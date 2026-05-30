'use client';

import html2canvas from 'html2canvas';
import { useRef } from 'react';
import { EditorState } from '@/lib/types';

export function useExport() {
  const exportRef = useRef<HTMLDivElement>(null);

  const handleExport = async (
    state: EditorState,
    quality: 'high' | 'normal' = 'high'
  ) => {
    if (!exportRef.current) return;

    try {
      const { width, height } = state.selectedSize.ratio === 'custom'
        ? { width: state.customWidth, height: state.customHeight }
        : state.selectedSize;

      const scale = quality === 'high' ? 2 : 1;

      const canvas = await html2canvas(exportRef.current, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: state.bgColor,
      });

      const link = document.createElement('a');
      link.download = `graphic-creator-${Date.now()}-${quality === 'high' ? 'hd' : 'normal'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed, please try again.');
    }
  };

  return { exportRef, handleExport };
}

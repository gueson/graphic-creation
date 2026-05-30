'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useEditorState } from '@/hooks/useEditorState';
import { fontOptions } from '@/lib/fonts';

interface FullscreenPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const positionStyles: Record<string, React.CSSProperties> = {
  'top-left': { top: 10, left: 10 },
  'top-center': { top: 10, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 10, right: 10 },
  'center-left': { top: '50%', left: 10, transform: 'translateY(-50%)' },
  'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  'center-right': { top: '50%', right: 10, transform: 'translateY(-50%)' },
  'bottom-left': { bottom: 10, left: 10 },
  'bottom-center': { bottom: 10, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 10, right: 10 },
};

export function FullscreenPreview({ isOpen, onClose }: FullscreenPreviewProps) {
  const t = useTranslations();
  const { state } = useEditorState();

  if (!isOpen) return null;

  const { width, height } = state.selectedSize.ratio === 'custom'
    ? { width: state.customWidth, height: state.customHeight }
    : state.selectedSize;

  const currentFont = fontOptions.find((f) => f.value === state.font);

  const maxWidth = window.innerWidth * 0.9;
  const maxHeight = window.innerHeight * 0.85;
  const aspectRatio = width / height;

  let displayWidth, displayHeight;
  if (aspectRatio >= 1) {
    displayWidth = Math.min(maxWidth, maxHeight * aspectRatio);
    displayHeight = displayWidth / aspectRatio;
  } else {
    displayHeight = Math.min(maxHeight, maxWidth / aspectRatio);
    displayWidth = displayHeight * aspectRatio;
  }

  const scaleFactor = displayWidth / width;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-red-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700"
      >
        ×
      </button>
      <div
        className="border border-gray-700 rounded-xl overflow-hidden"
        style={{
          width: `${displayWidth}px`,
          height: `${displayHeight}px`,
        }}
      >
        <div
          className="w-full h-full relative overflow-hidden"
          style={{
            backgroundColor: state.bgColor,
            backgroundImage: state.bgImage ? `url(${state.bgImage})` : 'none',
            backgroundSize: state.bgMode,
            backgroundPosition: 'center',
            backgroundRepeat: state.bgMode === 'repeat' ? 'repeat' : 'no-repeat',
          }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center text-pre-wrap p-8"
            style={{
              color: state.fontColor,
              fontFamily: currentFont?.fontFamily || state.font,
              fontWeight: currentFont?.fontWeight || '400',
              fontSize: `${state.fontSize * scaleFactor}px`,
              textAlign: state.textAlign,
              lineHeight: state.lineHeight,
            }}
          >
            {state.text}
          </div>

          {state.watermark.enabled && (
            <div
              className="absolute pointer-events-none"
              style={{
                ...positionStyles[state.watermark.position],
                zIndex: 10,
              }}
            >
              {state.watermark.text && (
                <div
                  style={{
                    color: state.watermark.color,
                    fontSize: `${state.watermark.fontSize * scaleFactor}px`,
                    opacity: state.watermark.opacity,
                    whiteSpace: 'nowrap',
                    textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                  }}
                >
                  {state.watermark.text}
                </div>
              )}
              {state.watermark.imageUrl && (
                <img
                  src={state.watermark.imageUrl}
                  alt="Watermark"
                  style={{
                    opacity: state.watermark.imageOpacity,
                    maxWidth: '100px',
                    maxHeight: '100px',
                    objectFit: 'contain',
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

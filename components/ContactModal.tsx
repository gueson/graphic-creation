'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {t('contact.title')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-3">
          {t('contact.description')}
        </p>
        <div className="mb-3">
          <p className="font-medium">
            {t('contact.email')}: gueson1989@163.com
          </p>
        </div>
        <div>
          <p className="font-medium mb-2">{t('contact.wechat')}:</p>
          <div className="w-48 h-48 mx-auto border border-gray-200 rounded-lg overflow-hidden bg-gray-100 relative">
            <Image
              src="/images/wechat.jpg"
              alt="微信二维码"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="text-xs text-red-500 mt-2 text-center">
            {t('contact.qrcodeExpired')}
          </p>
        </div>
      </div>
    </div>
  );
}

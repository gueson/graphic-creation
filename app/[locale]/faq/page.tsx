'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { LegalPage } from '@/components/legal/LegalPage';

export default function FAQ() {
  const t = useTranslations('faq');

  return (
    <LegalPage
      titleKey="faq.title"
      lastUpdatedKey="faq.lastUpdated"
    >
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-300">
          {t('intro')}
        </p>
      </div>

      <div className="space-y-4">
        <FAQItem
          question={t('q1')}
          answer={t('a1')}
        />
        <FAQItem
          question={t('q2')}
          answer={t('a2')}
        />
        <FAQItem
          question={t('q3')}
          answer={t('a3')}
        />
        <FAQItem
          question={t('q4')}
          answer={t('a4')}
        />
        <FAQItem
          question={t('q5')}
          answer={t('a5')}
        />
        <FAQItem
          question={t('q6')}
          answer={t('a6')}
        />
        <FAQItem
          question={t('q7')}
          answer={t('a7')}
        />
        <FAQItem
          question={t('q8')}
          answer={t('a8')}
        />
      </div>

      <section className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          {t('cantFind')}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t('contactText')}
        </p>
        <a
          href="mailto:gueson1989@163.com"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('contactButton')}
        </a>
      </section>
    </LegalPage>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
      >
        <span className="font-medium text-gray-900 dark:text-white pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

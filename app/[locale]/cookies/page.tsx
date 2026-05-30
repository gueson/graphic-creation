'use client';

import { useTranslations } from 'next-intl';
import { LegalPage } from '@/components/legal/LegalPage';

export default function CookiePolicy() {
  const t = useTranslations('legal.cookies');

  return (
    <LegalPage
      titleKey="legal.cookies.title"
      lastUpdatedKey="legal.cookies.lastUpdated"
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section1.title')}</h2>
        <p className="mb-4">{t('section1.p1')}</p>
        <p>{t('section1.p2')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section2.title')}</h2>
        <p className="mb-4">{t('section2.p1')}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t('section2.li1')}</li>
          <li>{t('section2.li2')}</li>
          <li>{t('section2.li3')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section3.title')}</h2>
        <p className="mb-4">{t('section3.p1')}</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-600">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-600">{t('section3.th1')}</th>
                <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-600">{t('section3.th2')}</th>
                <th className="px-4 py-2 text-left border-b border-gray-300 dark:border-gray-600">{t('section3.th3')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{t('section3.tr1td1')}</td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{t('section3.tr1td2')}</td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{t('section3.tr1td3')}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{t('section3.tr2td1')}</td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{t('section3.tr2td2')}</td>
                <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-600">{t('section3.tr2td3')}</td>
              </tr>
              <tr>
                <td className="px-4 py-2">{t('section3.tr3td1')}</td>
                <td className="px-4 py-2">{t('section3.tr3td2')}</td>
                <td className="px-4 py-2">{t('section3.tr3td3')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section4.title')}</h2>
        <p className="mb-4">{t('section4.p1')}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t('section4.li1')}</li>
          <li>{t('section4.li2')}</li>
          <li>{t('section4.li3')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section5.title')}</h2>
        <p className="mb-4">{t('section5.p1')}</p>
        <p>{t('section5.p2')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section6.title')}</h2>
        <p>{t('section6.p1')}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">{t('section7.title')}</h2>
        <p>{t('section7.p1')}</p>
      </section>
    </LegalPage>
  );
}

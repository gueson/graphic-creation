'use client';

import { useTranslations } from 'next-intl';
import { LegalPage } from '@/components/legal/LegalPage';

export default function PrivacyPolicy() {
  const t = useTranslations('legal.privacy');

  return (
    <LegalPage
      titleKey="legal.privacy.title"
      lastUpdatedKey="legal.privacy.lastUpdated"
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
          <li>{t('section2.li4')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section3.title')}</h2>
        <p className="mb-4">{t('section3.p1')}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t('section3.li1')}</li>
          <li>{t('section3.li2')}</li>
          <li>{t('section3.li3')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section4.title')}</h2>
        <p className="mb-4">{t('section4.p1')}</p>
        <p>{t('section4.p2')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section5.title')}</h2>
        <p className="mb-4">{t('section5.p1')}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t('section5.li1')}</li>
          <li>{t('section5.li2')}</li>
          <li>{t('section5.li3')}</li>
          <li>{t('section5.li4')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section6.title')}</h2>
        <p>{t('section6.p1')}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{t('section7.title')}</h2>
        <p>{t('section7.p1')}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">{t('section8.title')}</h2>
        <p>{t('section8.p1')}</p>
      </section>
    </LegalPage>
  );
}

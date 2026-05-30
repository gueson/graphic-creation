'use client';

import { useTranslations } from 'next-intl';
import { Mail, Github, Globe, Heart } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { LegalPage } from '@/components/legal/LegalPage';

export default function About() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <LegalPage
      titleKey="about.title"
      lastUpdatedKey="about.lastUpdated"
    >
      <section className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-4xl">G</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('developerName')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('developerTitle')}
            </p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('intro')}
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t('missionTitle')}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('mission')}
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t('featuresTitle')}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <FeatureCard
            icon="📐"
            title={t('feature1Title')}
            description={t('feature1Desc')}
          />
          <FeatureCard
            icon="🎨"
            title={t('feature2Title')}
            description={t('feature2Desc')}
          />
          <FeatureCard
            icon="💧"
            title={t('feature3Title')}
            description={t('feature3Desc')}
          />
          <FeatureCard
            icon="🔤"
            title={t('feature4Title')}
            description={t('feature4Desc')}
          />
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t('techStack')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'next-intl'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t('contactTitle')}
        </h3>
        <div className="space-y-3">
          <ContactItem
            icon={<Mail className="w-5 h-5" />}
            label={t('email')}
            value="gueson1989@163.com"
            href="mailto:gueson1989@163.com"
          />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {t('legalLinks')}
        </h3>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${locale}/privacy`}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            {t('privacyPolicy')}
          </Link>
          <Link
            href={`/${locale}/terms`}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            {t('termsOfService')}
          </Link>
          <Link
            href={`/${locale}/cookies`}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
          >
            {t('cookiePolicy')}
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center gap-2">
          {t('madeWith')}
          <Heart className="w-4 h-4 text-red-500" />
          {t('using')} <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400">Next.js</a>
        </p>
      </section>
    </LegalPage>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gray-500">{icon}</div>
      <span className="text-gray-600 dark:text-gray-400">{label}:</span>
      <a
        href={href}
        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {value}
      </a>
    </div>
  );
}

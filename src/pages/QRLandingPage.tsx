import React, { useState, useEffect } from 'react';
import QR from '../components/QR';
import { useLocale } from '../context/LocaleContext';

const QRLandingPage: React.FC = () => {
  const { lang, region, setLang, setRegion } = useLocale();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const fileName = `pavel.${region}.json`;
        const response = await fetch(`/data/${fileName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData[lang] || jsonData.en);
      } catch (error) {
        console.error('Failed to load CV data:', error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [region, lang]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500">
        <p className="text-white text-xl">Failed to load data</p>
      </div>
    );
  }

  const cvUrl = `https://pavelbiswas.github.io/react-cv?region=${region}&lang=${lang}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Top Controls */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-sm font-semibold rounded-lg transition-all ${
              lang === 'en'
                ? 'bg-white text-primary-600'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('ru')}
            className={`px-3 py-1 text-sm font-semibold rounded-lg transition-all ${
              lang === 'ru'
                ? 'bg-white text-primary-600'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            РУ
          </button>
          <div className="w-px bg-white/30"></div>
          <button
            onClick={() => setRegion('ru')}
            className={`px-3 py-1 text-sm font-semibold rounded-lg transition-all ${
              region === 'ru'
                ? 'bg-white text-primary-600'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            🇷🇺
          </button>
          <button
            onClick={() => setRegion('uae')}
            className={`px-3 py-1 text-sm font-semibold rounded-lg transition-all ${
              region === 'uae'
                ? 'bg-white text-primary-600'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            🇦🇪
          </button>
        </div>

        {/* Center Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center">
          <h1 className="text-3xl font-bold text-primary-600 dark:text-blue-400 mb-2">
            {data.name || data.personal?.name}
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 font-semibold mb-6">
            {data.title || data.personal?.title}
          </p>

          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg inline-block p-4 mb-6">
            <QR cvUrl={cvUrl} />
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
            Scan to view full CV
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 break-all">
            <a
              href={`mailto:${data.contact?.email || data.personal?.email}`}
              className="hover:text-secondary-500 transition-colors"
            >
              {data.contact?.email || data.personal?.email}
            </a>
            {' • '}
            <a
              href={`tel:${data.contact?.phone || data.personal?.phone}`}
              className="hover:text-secondary-500 transition-colors"
            >
              {data.contact?.phone || data.personal?.phone}
            </a>
          </p>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            {data.contact?.linkedin && (
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary-500 dark:bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors"
              >
                LinkedIn
              </a>
            )}
            {data.contact?.email && (
              <a
                href={`mailto:${data.contact.email}`}
                className="block px-4 py-2 bg-secondary-500 dark:bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 transition-colors"
              >
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRLandingPage;

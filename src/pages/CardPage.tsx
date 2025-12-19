import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import LangToggle from '../components/LangToggle';
import RegionToggle from '../components/RegionToggle';
import { useLocale } from '../context/LocaleContext';

const CardPage: React.FC = () => {
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
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-600 dark:text-red-400">Failed to load data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 no-print">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4">
          <LangToggle currentLang={lang} onChange={(v: string) => setLang(v as 'en' | 'ru')} />
          <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
          <RegionToggle currentRegion={region} onChange={(v: string) => setRegion(v as 'ru' | 'uae')} />
        </div>
      </div>

      <main className="section-container">
        <article className="card">
          <Header data={data} />
        </article>

        <Skills data={data} />
        <Contact data={data} />
      </main>
    </div>
  );
};

export default CardPage;

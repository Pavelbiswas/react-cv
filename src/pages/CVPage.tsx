import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import PrintButton from '../components/PrintButton';
import LangToggle from '../components/LangToggle';
import RegionToggle from '../components/RegionToggle';
import { useLocale } from '../context/LocaleContext';

const CVPage: React.FC = () => {
  const { lang, region, setLang, setRegion } = useLocale();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const fileName = `pavel.${region}.json`;
        const response = await fetch(`${import.meta.env.BASE_URL}data/${fileName}`);
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
        <p className="text-xl text-gray-600 dark:text-gray-400">Loading CV...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-red-600 dark:text-red-400">Failed to load CV data</p>
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
          <div className="w-full sm:w-px h-px sm:h-6 bg-gray-300 dark:bg-gray-600 my-2 sm:my-0"></div>
          <PrintButton />
        </div>
      </div>

      <main className="section-container">
        <article>
          <Header data={data} />
        </article>

        {data.summary && (
          <article className="mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-secondary-500 dark:border-secondary-400 pl-4">
              {data.summary}
            </p>
          </article>
        )}

        <Skills data={data} />
        <Experience data={data} />
        <Education data={data} />
        {data.certifications && data.certifications.length > 0 && (
          <Certifications data={data} />
        )}
        {data.publications && data.publications.length > 0 && (
          <Publications data={data} />
        )}
        <Contact data={data} />
      </main>
    </div>
  );
};

export default CVPage;

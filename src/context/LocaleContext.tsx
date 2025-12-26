import React, { createContext, useState, useContext, useEffect } from 'react';

type Lang = 'en' | 'ru';
type Region = 'ru' | 'uae';

interface LocaleContextType {
  lang: Lang;
  region: Region;
  setLang: (lang: Lang) => void;
  setRegion: (region: Region) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

/* ------------------ Helpers ------------------ */

const detectLanguage = (): Lang => {
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
};

const detectRegion = (): Region => {
  return navigator.language.toLowerCase().includes('ru') ? 'ru' : 'uae';
};

const defaultLangByRegion: Record<Region, Lang> = {
  ru: 'ru',
  uae: 'en',
};

/* ------------------ Provider ------------------ */

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegionState] = useState<Region>(() => {
    return (localStorage.getItem('region') as Region) || detectRegion();
  });

  const [lang, setLangState] = useState<Lang>(() => {
    return (
      (localStorage.getItem('lang') as Lang) ||
      defaultLangByRegion[region] ||
      detectLanguage()
    );
  });

  /* ---- Persist changes ---- */

  useEffect(() => {
    localStorage.setItem('region', region);
  }, [region]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  /* ---- Controlled setters ---- */

  const setRegion = (newRegion: Region) => {
    setRegionState(newRegion);
    setLangState(defaultLangByRegion[newRegion]);
  };

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  return (
    <LocaleContext.Provider value={{ lang, region, setLang, setRegion }}>
      {children}
    </LocaleContext.Provider>
  );
};

/* ------------------ Hook ------------------ */

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

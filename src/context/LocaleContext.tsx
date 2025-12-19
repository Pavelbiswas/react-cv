import React, { createContext, useState, useContext } from 'react';

interface LocaleContextType {
  lang: 'en' | 'ru';
  region: 'ru' | 'uae';
  setLang: (lang: 'en' | 'ru') => void;
  setRegion: (region: 'ru' | 'uae') => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const detectLanguage = (): 'en' | 'ru' => {
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ru') ? 'ru' : 'en';
};

const detectRegion = (): 'ru' | 'uae' => {
  const browserLang = navigator.language.toLowerCase();
  // Simple detection based on language
  // In production, you'd use geolocation API or IP-based service
  return browserLang.includes('ar') || browserLang.includes('ae') ? 'uae' : 'ru';
};

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<'en' | 'ru'>(() => {
    const stored = localStorage.getItem('lang') as 'en' | 'ru' | null;
    return stored || detectLanguage();
  });

  const [region, setRegionState] = useState<'ru' | 'uae'>(() => {
    const stored = localStorage.getItem('region') as 'ru' | 'uae' | null;
    return stored || detectRegion();
  });

  const setLang = (newLang: 'en' | 'ru') => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const setRegion = (newRegion: 'ru' | 'uae') => {
    setRegionState(newRegion);
    localStorage.setItem('region', newRegion);
  };

  return (
    <LocaleContext.Provider value={{ lang, region, setLang, setRegion }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

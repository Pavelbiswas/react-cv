import React from 'react';

interface LangToggleProps {
  currentLang: string;
  onChange: (lang: string) => void;
}

const LangToggle: React.FC<LangToggleProps> = ({ currentLang, onChange }) => {
  return (
    <div className="flex gap-2">
      <button
        className={`px-3 py-2 font-semibold rounded-lg transition-all ${
          currentLang === 'en'
            ? 'bg-secondary-500 dark:bg-secondary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        onClick={() => onChange('en')}
        title="English"
      >
        EN
      </button>
      <button
        className={`px-3 py-2 font-semibold rounded-lg transition-all ${
          currentLang === 'ru'
            ? 'bg-secondary-500 dark:bg-secondary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        onClick={() => onChange('ru')}
        title="Русский"
      >
        РУ
      </button>
    </div>
  );
};

export default LangToggle;

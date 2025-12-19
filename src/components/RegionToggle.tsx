import React from 'react';

interface RegionToggleProps {
  currentRegion: string;
  onChange: (region: string) => void;
}

const RegionToggle: React.FC<RegionToggleProps> = ({ currentRegion, onChange }) => {
  return (
    <div className="flex gap-2">
      <button
        className={`px-3 py-2 font-semibold rounded-lg transition-all ${
          currentRegion === 'ru'
            ? 'bg-secondary-500 dark:bg-secondary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        onClick={() => onChange('ru')}
        title="Russia"
      >
        🇷🇺 Russia
      </button>
      <button
        className={`px-3 py-2 font-semibold rounded-lg transition-all ${
          currentRegion === 'uae'
            ? 'bg-secondary-500 dark:bg-secondary-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        onClick={() => onChange('uae')}
        title="United Arab Emirates"
      >
        🇦🇪 UAE
      </button>
    </div>
  );
};

export default RegionToggle;

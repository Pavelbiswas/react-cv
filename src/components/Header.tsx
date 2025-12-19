import React from 'react';

interface HeaderProps {
  data: any;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  if (!data) return null;
  
  return (
    <header className="border-b-4 border-secondary-500 dark:border-secondary-400 pb-6 mb-8">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-500 dark:text-blue-400">
          {data.name || data.personal?.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary-500 dark:text-secondary-400">
          {data.title || data.personal?.title}
        </h2>
        <div className="flex flex-wrap gap-4 pt-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
          <a
            href={`mailto:${data.contact?.email || data.personal?.email}`}
            className="hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
          >
            📧 {data.contact?.email || data.personal?.email}
          </a>
          <a
            href={`tel:${data.contact?.phone || data.personal?.phone}`}
            className="hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
          >
            📱 {data.contact?.phone || data.personal?.phone}
          </a>
          <span className="text-gray-600 dark:text-gray-400">📍 {data.region || data.personal?.location}</span>
          {(data.contact?.linkedin || data.personal?.linkedin) && (
            <a
              href={data.contact?.linkedin || data.personal?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors"
            >
              🔗 LinkedIn
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

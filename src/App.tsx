import { useState } from 'react';
import CVPage from './pages/CVPage';
import CardPage from './pages/CardPage';
import QRLandingPage from './pages/QRLandingPage';
import ThemeToggle from './components/ThemeToggle';

type ViewType = 'cv' | 'card' | 'qr';

function App() {
  const [view, setView] = useState<ViewType>('cv');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <nav className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 no-print">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setView('cv')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  view === 'cv'
                    ? 'bg-secondary-500 dark:bg-secondary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title="Full CV with all details"
              >
                📄 Full CV
              </button>
              <button
                onClick={() => setView('card')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  view === 'card'
                    ? 'bg-secondary-500 dark:bg-secondary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title="Quick overview card"
              >
                🎴 Card View
              </button>
              <button
                onClick={() => setView('qr')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  view === 'qr'
                    ? 'bg-secondary-500 dark:bg-secondary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title="QR code landing page"
              >
                📱 QR Landing
              </button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="transition-colors duration-300">
        {view === 'cv' && <CVPage />}
        {view === 'card' && <CardPage />}
        {view === 'qr' && <QRLandingPage />}
      </main>
    </div>
  );
}

export default App;

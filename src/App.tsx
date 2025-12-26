import { useEffect, useState } from 'react';
import CVPage from './pages/CVPage';
import CardPage from './pages/CardPage';
import QRLandingPage from './pages/QRLandingPage';
import ThemeToggle from './components/ThemeToggle';

type ViewType = 'cv' | 'card' | 'qr';

function App() {
  const [view, setView] = useState<ViewType>('cv');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');

    if (viewParam === 'cv' || viewParam === 'card' || viewParam === 'qr') {
      setView(viewParam);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <nav className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 no-print">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setView('cv')}>📄 Full CV</button>
              <button onClick={() => setView('card')}>🎴 Card View</button>
              <button onClick={() => setView('qr')}>📱 QR Landing</button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main>
        {view === 'cv' && <CVPage />}
        {view === 'card' && <CardPage />}
        {view === 'qr' && <QRLandingPage />}
      </main>
    </div>
  );
}

export default App;

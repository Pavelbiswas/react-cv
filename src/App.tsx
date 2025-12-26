import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/QRLandingPage';
import CardPage from './pages/CardPage';
import { useLocale } from './context/LocaleContext';

function App() {
  const navigate = useNavigate();
  const { setRegion, setLang } = useLocale();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const region = params.get('region');
    const lang = params.get('lang');
    const view = params.get('view');

    if (region === 'ru' || region === 'uae') {
      setRegion(region);
    }

    if (lang === 'ru' || lang === 'en') {
      setLang(lang);
    }

    if (view === 'card') {
      navigate('/card', { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default App;

import { useState, useEffect } from 'react';
import SplashPage from './components/SplashPage';
import MainSite from './components/MainSite';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/check');
        if (response.ok) {
          setIsAuthenticated(true);
        }
      } catch (e) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleUnlock = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('alexispaul_auth', 'true');
  };

  return isAuthenticated ? <MainSite /> : <SplashPage onUnlock={handleUnlock} />;
}

export default App;

import { useState, useEffect } from 'react';
import SplashPage from './components/SplashPage';
import MainSite from './components/MainSite';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check session storage on mount so refresh doesn't lock out
    const authStatus = sessionStorage.getItem('alexispaul_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleUnlock = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('alexispaul_auth', 'true');
  };

  return isAuthenticated ? <MainSite /> : <SplashPage onUnlock={handleUnlock} />;
}

export default App;

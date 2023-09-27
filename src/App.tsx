import { useEffect } from 'react';
import './App.css';

// pages
import { PageRouter } from './pages';

// components
import { Footer, Navbar } from './components';

// apis
import { API } from './apis/instance';

function App() {
  const localStorageToken = localStorage.getItem('accessToken');
  useEffect(() => {
    if (localStorageToken !== null) {
      API.defaults.headers.common.Authorization = `Bearer ${JSON.parse(localStorageToken)}`;
    }
  }, [localStorageToken]);

  return (
    <>
      <Navbar />
      <PageRouter />
      <Footer />
    </>
  );
}

export default App;

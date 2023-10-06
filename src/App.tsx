import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

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
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

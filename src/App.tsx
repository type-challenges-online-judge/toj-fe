import './App.css';

// pages
import { PageRouter } from './pages';

// components
import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <PageRouter />
    </>
  );
}

export default App;

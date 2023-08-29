import './App.css';

// pages
import { PageRouter } from './pages';

// components
import { Footer, Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <PageRouter />
      <Footer />
    </>
  );
}

export default App;

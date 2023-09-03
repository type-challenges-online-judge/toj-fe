import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// pages
import { PageRouter } from './pages';

// components
import { Footer, Navbar } from './components';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <PageRouter />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;

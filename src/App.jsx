import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './components/providers/AppProvider';
import ErrorBoundary from './components/error/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { useLenis } from './hooks/useLenis';
import './App.css';

function AppContent() {
  useLenis();

  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-container">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

import React from 'react';
import { AppProvider } from './components/providers/AppProvider';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;

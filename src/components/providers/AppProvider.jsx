import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2,
    },
  },
});

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ theme, setTheme }}>
        {children}
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export const useAppContext = () => useContext(AppContext);

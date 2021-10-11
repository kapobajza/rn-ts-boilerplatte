import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { MainRouter } from './src/router';
import { ServicesProvider } from './src/services';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const App = () => {
  return (
    <ServicesProvider>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </ServicesProvider>
  );
};

export default App;

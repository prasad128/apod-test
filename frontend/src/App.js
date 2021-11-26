
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Apod from './components/Apod'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Apod/>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "react-query";

import React from 'react'
import Routes from './routes/Routes'

// import { UserProvider } from './contexts/UserContexts';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client ={queryClient}>
      <Routes/>
    </QueryClientProvider>
  )
}

export default App
import * as React from 'react';
import { Router } from './pages/Router/Router';
import { CommonContextProvider } from './contexts/CommonContext';

export const App = () => {

  return(
    <CommonContextProvider>
      <Router/>
    </CommonContextProvider>
  )
}
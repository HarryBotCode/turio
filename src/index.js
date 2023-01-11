import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/theme';
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/roboto/400.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);



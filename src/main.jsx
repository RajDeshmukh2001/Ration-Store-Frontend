import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from "@material-tailwind/react";
import { DataProvider } from './context/GetDataContext.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <DataProvider>
        <NextUIProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </NextUIProvider>
      </DataProvider>
    </AuthContextProvider>
  </StrictMode>,
)

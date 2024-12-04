import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { DataProvider } from './context/GetDataContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <DataProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </DataProvider>
    </AuthContextProvider>
  </StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CaseContextProvider } from './context/CaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CaseContextProvider>
      <App />
    </CaseContextProvider>
  </React.StrictMode>
);


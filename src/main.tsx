// import React from 'react';
import ReactDOM from 'react-dom/client';

import './app-i18n/i18n';

import { App } from './App.tsx';

import './index.css';
import 'allotment/dist/style.css';

if (import.meta.env.VITE_MOCK_API === 'true') {
  import('./api-mocking/browser.ts').then(({ worker }) => {
    worker.start();
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);

import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './scenes/App';

import './style.css';

const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

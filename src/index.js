import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import registerServiceWorker from './registerServiceWorker';
import { initializeApp } from 'firebase/app';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import App from 'scenes/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/main.css';

// Add social media icons
library.add(faBars, faTimes);

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyDQC55nWiuHoR2uChUafiFWaYGVH2ecPvI',
  authDomain: 'by-forte.firebaseapp.com',
  databaseURL: 'https://by-forte.firebaseio.com',
  projectId: 'by-forte',
  storageBucket: 'by-forte.appspot.com',
  messagingSenderId: '622359278063',
};
initializeApp(config);

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <App history={history} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

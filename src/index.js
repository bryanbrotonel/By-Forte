import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/base/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scenes/base/App.scss';

ReactDOM.render((
 <BrowserRouter>
   <App />
 </BrowserRouter>
 ), document.getElementById('root'));
 registerServiceWorker();

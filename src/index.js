import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from 'scenes/app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'scss/main.css';

ReactDOM.render((
  <Router>
    <App/>
  </Router>), document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/base/index';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './scenes/base/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

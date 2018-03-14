import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import App from './scenes/base/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

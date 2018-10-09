import React from 'react';
import ReactDOM from 'react-dom';

import './lib/index.css';

import App from './components/App';
import * as serviceWorker from './lib/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

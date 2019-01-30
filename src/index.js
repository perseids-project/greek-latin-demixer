import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tippy/dist/tippy.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

window.onbeforeunload = function() { return true; };

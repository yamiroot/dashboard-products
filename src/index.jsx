import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Router />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';
import App from './App';
import './css/styles.css';

import { names } from "./data";

ReactDOM.render(
  <React.StrictMode>
    <App names={names} />
  </React.StrictMode>,
  document.getElementById('root')
);

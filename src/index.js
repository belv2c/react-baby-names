import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';
import App from './App';
import './css/styles.css';

import { NamesProvider } from './providers/names';

import { names } from "./data";

ReactDOM.render(
  <React.StrictMode>
    <NamesProvider>
      <App />
    </NamesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let useMockData = new URLSearchParams(window.location.search).get('useMockData') || false;

ReactDOM.render(<App useMockData={useMockData}/>, document.getElementById('root'));

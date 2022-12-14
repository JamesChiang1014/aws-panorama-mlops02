import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import NorthStarThemeProvider from 'aws-northstar/components/NorthStarThemeProvider';

import store from './store'
import App from './App'
import './i18n/i18n'
import awsExports from './aws-exports';
import Amplify from 'aws-amplify';
Amplify.configure(awsExports);


ReactDOM.render(
  <NorthStarThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NorthStarThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

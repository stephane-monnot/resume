import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import './index.css';
import configureStore from './store/configureStore';

const store = configureStore({});

WebFont.load({
  google: {
    families: [
      'Material Icons',
      'Roboto:400,500',
      'Open Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,800,300&display=swap',
    ],
  },
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import { ServiceProvider } from './components/service-context';
import Server from './server';

import App from './components/app';

const server = new Server();

localStorage.setItem('isLoged', false);
localStorage.setItem('autorization', JSON.stringify({login: 'admin', password: 1234}));

ReactDOM.render(
  <Provider store={store}>
    <ServiceProvider value={server}>
      <App />
    </ServiceProvider>
  </Provider>,
  document.getElementById('root')
);

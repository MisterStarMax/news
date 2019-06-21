import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ServiceProvider } from './components/service-context';

import App from './components/app';

import store from './redux/store';
import Server from './server';

const server = new Server();

localStorage.setItem('isLoged', false);
const data_Autorization = JSON.stringify({login: 'admin', password: 1234});
localStorage.setItem('autorization', data_Autorization);

ReactDOM.render(
  <Provider store={store}>
    <ServiceProvider value={server}>
      <App />
    </ServiceProvider>
  </Provider>,
  document.getElementById('root')
);

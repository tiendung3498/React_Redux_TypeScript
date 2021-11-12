import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'utils';
import { store } from 'app/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ConnectedRouter history ={history} >
        <>
          <CssBaseline/>
          <App/> 
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

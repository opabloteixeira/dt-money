import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import {App} from './App';

createServer({
  routes() {

    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction1',
          amount: 12,
          type: 'deposit',
          categoria: 'Food',
          createAt: new Date()
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

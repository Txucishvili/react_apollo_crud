import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const client = new ApolloClient(
  {
    uri: 'http://localhost:3001/graphql',
    headers: {
      authorization: localStorage.getItem('token')
        ? localStorage.getItem('token')
        : 'none'
    }
  });

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);


ReactDOM.render(<ApolloApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

const message = 'Welcome to gov-brands-benchmark-ui-2';
const App = () => (
  <div className="App">
    <h1>{message}</h1>
  </div>
);

export default hot(module)(App);

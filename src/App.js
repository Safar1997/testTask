import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Routes from './routes';
import history from './history';

const App = () => {
  return (
    <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
    </div>
  );
}

export default App;

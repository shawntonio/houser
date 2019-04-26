import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
      </div>
      {routes}
    </HashRouter>
  );
}

export default App;

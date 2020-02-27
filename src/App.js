import React from 'react';
import logo from './logo.svg';
import './App.css';
import nba from "./collector/nba.js"

function App() {

  nba.getScoreboard("20180225");

  return (
    <div className="App">
      <header className="App-header">
        <h3>wtf you talking about</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Sliding puzzle</div>
      </header>
      <div>Gameboard</div>
      <Gameboard />
    </div>
  );
}

export default App;

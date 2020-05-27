import React from 'react';
import './App.css';
import CountryScores from './CountryScores'


function App() {
  return (
    <div className="App">
      <header className="App-body">
        {/* <p className="boardTitle">
          High Scores Per Country
        </p> */}
        <CountryScores />
      </header>
    </div >
  );
}
export default App;

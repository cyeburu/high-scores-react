import React from 'react';
import './App.css';
import CountryScores from './CountryScores'
import SearchButton from "./SearchButton"



function App() {
  const list = ["time", "money", "ego"]




  return (
    <div >
      <header className="App-body">
        {/* <SearchButton list={list} /> */}
        <SearchButton />
        <CountryScores />
      </header>
    </div >
  );
}
export default App;

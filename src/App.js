import React, { useState } from 'react';
import './App.css';
import SearchButton from "./SearchButton"
import OneCountryTable from "./OneCountryTable"
import ScoreData from './ScoreData.js';

function App() {
  const [toggle, setToggle] = useState(true)

  function dessortHandler(arr) {
    arr.sort((a, b) => a.s > b.s ? 1 : -1)
  }
  function ascsortHandler(arr) {
    arr.sort((a, b) => a.s > b.s ? -1 : 1)
  }

  return (
    <div className="App-body">
      <SearchButton
        setToggle={setToggle}
        toggle={toggle}
      />
      <div className="container">
        <div className="row">
          <p className="boardTitle">
            High Scores Per Country
           </p>
          <ul>{ScoreData.sort((a, b) => a.name < b.name ? -1 : 1).map((country, index) => {
            if (toggle) {
              ascsortHandler(country.scores)
            } else {
              dessortHandler(country.scores)
            }
            return (
              <div className="countryTable" key={index}>
                <div className="countryName">High Scores: {country.name}</div>
                {country.scores.map((score, index) => {
                  return (<OneCountryTable score={score} key={index} />)
                })}

              </div>
            )
          })}
          </ul>
        </div>
      </div>
    </div >
  );
}
export default App;

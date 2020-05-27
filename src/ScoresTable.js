import React from "react";
import OneCountryTable from "./OneCountryTable"

// This should display the table country name and scores for every country
function ScoresTable(props) {
    return (
        <div className="container">
            <ul> {props.list.map((country, index) => {
                return (
                    <OneCountryTable countryName={country.name} countryScores={country.scores} key={index} />
                )
            })}
            </ul>
        </div>
    )
}
export default ScoresTable;
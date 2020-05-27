import React from "react"


function OneCountryTable(props) {
    return (
        <div className="countryTable">
            <li >
                <div className="countryName">High Scores: {props.countryName}</div>

                {props.countryScores.map((playerAndScore, index) => {
                    return (
                        <div className="playerScore">
                            <span className="playerName" key={index}> {playerAndScore.n} </span>
                            <span className="playerScore" key={index}> {playerAndScore.s}</span>
                        </div>
                    )
                })}

            </li>
        </div>
    )
}
export default OneCountryTable
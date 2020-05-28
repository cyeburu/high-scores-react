import React from "react"


function OneCountryTable(props) {
    return (
        <div className="countryTable">
            <li >
                <div className="countryName">High Scores: {props.countryName}</div>

                {props.countryScores.map((playerAndScore, index) => {
                    return (
                        <div className="playerScore" key={index}>
                            <span className="playerName" > {playerAndScore.n} </span>
                            <span className="playerScore" > {playerAndScore.s}</span>
                        </div>
                    )
                })}

            </li>
        </div>
    )
}
export default OneCountryTable
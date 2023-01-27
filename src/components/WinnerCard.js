import React from "react";

function WinnerCard({ finals, setDisplay }){
    const {year, champion, runner_up, third_place, host, teams, matches_played, goals} = finals
    return(
        <div className="card">
            <span className="card" >
                                <h1>World Cup {year}</h1>
                                <h1>Winner: {champion}</h1>
                                <h2>Second Place: {runner_up}</h2>
                                <h2>Third Place: {third_place}</h2>
                                <h2>Host: {host}</h2>
                                <h2>Teams: {teams}</h2>
                                <h2>Matches Played: {matches_played}</h2>
                                <h2>Total Goals Scored: {goals}</h2>
                <div>
                    <button className="btn btn-primary" onClick={() => {setDisplay("collection")}}> return</button> 
                </div>                 
            </span> 
       </div>
    )
}

export default WinnerCard;
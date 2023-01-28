import React from "react";

function WinnerCard({ finals, setDisplay }){
    const {year, champion, runner_up, third_place, host, teams, matches_played, goals} = finals
    return(
        <div className="card">
            <span className="details" >
                                <h1>WORLD CUP {year}</h1>
                                <h2>Winner: {champion}</h2>
                                <h3>Second Place: {runner_up}</h3>
                                <h4>Third Place: {third_place}</h4>
                                <h5>Host: {host}</h5>
                                <h5>Teams: {teams}</h5>
                                <h5>Matches Played: {matches_played}</h5>
                                <h5>Total Goals Scored: {goals}</h5>
                                
            </span>
            <div>
                <button className="btn btn-outline-danger" onClick={() =>{setDisplay("matches")}}><i class="fa-solid fa-arrow-right-to-bracket"></i></button> 
            </div> 
       </div>
    )
}

export default WinnerCard;
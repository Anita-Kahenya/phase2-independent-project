import React from "react";

function WinnerCard({ finals, setDisplay }){
    const {year, champion, runner_up, third_place, host, teams, matches_played, goals} = finals

    const handleClick =()=>{
        setDisplay("matches")
    }
    return(
        <div className="container">
            <div id="card">
                <div className="details" >
                                <h1>WORLD CUP {year}</h1>
                                <h2>Host: {host}</h2>
                                <h2>Winner: {champion}</h2>
                                <h3>Second Place: {runner_up}</h3>
                                <h3>Third Place: {third_place}</h3>
                                <h4>Teams: {teams}</h4>
                                <h4>Matches Played: {matches_played}</h4>
                                <h4>Total Goals Scored: {goals}</h4>                        
                </div>
                <div className="returnButton">
                    <button className="btn btn-danger" onClick={handleClick}><i className="fa-solid fa-arrow-right-to-bracket"></i></button> 
                </div>
            </div>
       </div>
    )
}

export default WinnerCard;
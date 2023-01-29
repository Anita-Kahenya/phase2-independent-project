import React from "react";
import Cards from "./Cards";

function Finalists({tournaments, setDisplay, setFinalsToDisplay}){

    const finalistDisplay = tournaments.map((tournament) => <Cards setDisplay={setDisplay}
            setFinalsToDisplay={setFinalsToDisplay} 
            tournament={tournament} 
            key={tournament.id}
            />
        )
    return(
        <>
            <div className="container">
                <h1>times</h1>
            {finalistDisplay}
            </div>
        </>
    )
}
export default Finalists;
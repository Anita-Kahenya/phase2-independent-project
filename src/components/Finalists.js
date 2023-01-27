import React from "react";
import Cards from "./Cards";

function Finalists({tournaments, setDisplay, setFinalsToDisplay}){

    const finalistDisplay = tournaments.map(tournament => <Cards setDisplay={setDisplay} 
            setFinalsToDisplay={setFinalsToDisplay} 
            tournament={tournament} 
            key={tournament.id}/>
        )
    return(
        <>
            <div className="card row displayField cardField" >
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {finalistDisplay}
            </div>
            </div>
        </>
    )
}
export default Finalists;
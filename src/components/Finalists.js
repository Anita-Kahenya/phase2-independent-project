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
            {finalistDisplay}
        </>
    )
}
export default Finalists;
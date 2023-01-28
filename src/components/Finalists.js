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
            <div className="container" >
            {finalistDisplay}
            </div>
        </>
    )
}
/*row row-cols-4 row-cols-md-4 g-4 */
export default Finalists;
import React from "react";

function Finalists({tournaments, setDisplay, setFinalsToDisplay, container}){
    function handleClick(){
        if(!container) {
            setMatchesToDisplay(tournaments)
            setDisplay("specs")
        } else {
            removeFromArmy(bot)
        }
    }
    return(
        <div className="card row displayField cardField" onClick={handleClick}>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                tournaments.map((champion)=>{
                    return(
                        <div key={champion.id} className='col-sm-2'>
                            <span className="card" >
                                <h1>{champion.year}</h1>
                                <h2>{champion.champion}</h2>Vs
                                <h2>{champion.runner_up}</h2>
                            </span>
                       </div>   
                    )
                })
            }
            </div>
        </div>
    )
}

export default Finalists;
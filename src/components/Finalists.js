import React from "react";

function Finalists(games){
    return(
        <div className="card" >
            <span>
                {
                games.map((game)=>{
                    return(
                        <div key={game.id}>
                        <h2>{`${game.champion}`}</h2> VS 
                        <h2>{`${game.runner_up}`}</h2>
                        </div>
                    )
                })
                }
                
            </span>
        </div>
    )
}

export default Finalists;
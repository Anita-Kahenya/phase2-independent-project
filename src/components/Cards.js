function Cards({tournament, setDisplay, setFinalsToDisplay, container}){
    const {year,champion,runner_up} = tournament;
    
    //display clicked card
    function handleClick(){
        if(!container) {
            setFinalsToDisplay(tournament)
            setDisplay("wrong")
        } else {
            console.log(tournament)
        }
    }
    
    return(
        <div  className="card finalsCard" onClick={handleClick}>
            <div className="content">
                <h1>{year}</h1>
                <h2>{runner_up}</h2>Vs
                <h2>{champion}</h2>
            </div>
        </div>   
    )
}
/* 
   
*/
export default Cards;
function Cards({tournament, setDisplay, setFinalsToDisplay, key, container}){
    const {year,champion,runner_up} = tournament;
    
    function handleClick(){
        if(!container) {
            setFinalsToDisplay(tournament)
            setDisplay("specs")
        } else {
            console.log(tournament)
        }
    }
    return(
        <div className="card row displayField cardField" >
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className='col-sm-2'>
                            <span key={key} className="card" onClick={handleClick}>
                                <h1>{year}</h1>
                                <h2>{champion}</h2>Vs
                                <h2>{runner_up}</h2>
                            </span>
                </div>   
            </div>
        </div>
    )
}
/* 
   
*/
export default Cards;
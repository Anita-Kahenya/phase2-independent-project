import React from "react";

function SelectYear({ handleSearch }){
    
    const handleOnChange = (e)=> {
        e.preventDefault()
        const year = e.target.value
        console.log(year)
    }
    
    return(
        <div  className="input-group mb-3" id='searchBar'>
            <form className='row' onSubmit={handleSearch}>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Select Year</label>
            </div>
            <select type='search' onChange={handleSearch} className="form-control custom-select search-field" id="inputGroupSelect01">
                <option value='2022' >2022</option>
                <option value='2018' >2018</option>
                <option value='2014' >2014</option>
                <option value='2014' >2014</option>
                <option value='2010' >2010</option>
                <option value='2006' >2006</option>
                <option value='2002' >2002</option>
                <option value='1998' >1998</option>
                <option value='1994' >1994</option>
                <option value='1990' >1990</option>
                <option value='1986' >1986</option>
                <option value='1982' >1982</option>
                <option value='1978' >1978</option>
                <option value='1974' >1974</option>
                <option value='1970' >1970</option>
                <option value='1966' >1966</option>
                <option value='1962' >1962</option>
                <option value='1958' >1958</option>
                <option value='1954' >1954</option>
                <option value='1950' >1950</option>
                <option value='1938' >1938</option>
                <option value='1934' >1934</option>
                <option value='1930' >1930</option>
            </select>
            <div id="button">
                <button id="button"
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleOnChange}
                    >
                    See Finalists
                </button>
            </div>
            </form>    
        </div>
    )
}

export default SelectYear;
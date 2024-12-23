import "./style.css"
export default function Search({search,Setsearch,handlesearch}){
    return(
        <div className="search-container">
            <input
            type="text"
            placeholder="Enter city name"
            value={search}
            onChange={(e)=>Setsearch(e.target.value)}
            />
            <button className="search-btn" onClick={handlesearch}>Search weather</button>

        </div> 
    )
}
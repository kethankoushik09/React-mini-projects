import { useEffect, useState } from "react"
import Search from "../search/indesx"
import "./style.css"


export default function Weather(){
    const [search,Setsearch] = useState("");
    const [loading,Setloading] = useState(false);
    const [weatherdata,Setweatherdata] = useState([]);
    async function fetchweatherdata(param) {
        Setloading(true);
        try{
        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=dbb2acaa2cf5ea758e0ddaca360c9b7e`);
        if(!response.ok){
            throw new Error("not found.......!");
        }
        Setloading(false);
        const data =await response.json();
        console.log(data);
        Setweatherdata(data);
        }
        catch(e){
            Setloading(false);
            console.log(e.message);
            
        }
    }
    function getCurrentDate() {
        return new Date().toLocaleDateString("en-us", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        });
    }

    function handlesearch(){
        fetchweatherdata(search);
    }
    useEffect(()=>{
        fetchweatherdata("Bangalore");
    },[])
    // if(error){
    // }

    return(
        <>
            <div className="weather-wrapper">
                <Search search={search} Setsearch={Setsearch} handlesearch={handlesearch}/>
                {/* <p>weather-component</p> */}
                {loading?
                    <p>loading............!</p>:
                    (
                        <div>
                            <div className="city-name">
                                <h2>{weatherdata.name},<span>{weatherdata?.sys?.country}</span></h2>
                            </div>
                            <div className="date">
                                <h3>{getCurrentDate()}</h3>
                            </div>
                            <div className="temp">{weatherdata?.main?.temp}</div>
                            <p className="description">
                                {weatherdata && weatherdata.weather && weatherdata.weather[0]
                                ? weatherdata.weather[0].description
                                : ""}
                            </p>
                            <div className="weather-info">
                                <div className="column">
                                    <div>
                                        <p className="wind">{weatherdata?.wind?.speed}</p>
                                        <p>Wind Speed</p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div>
                                        <p className="humidity">{weatherdata?.main?.humidity}%</p>
                                        <p>Humidity</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </>
    )
}
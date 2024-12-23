import { useEffect, useState } from "react";
import "./style.css"

export default function Randomquote(){
    const [loading,setloading] = useState(false);
    const [quote,Setquote] = useState(null);
    async function fetchqoute() {
        setloading(true);
        try{

            const response = await fetch("https://dummyjson.com/quotes/random?",{
                method:"GET",
            });
            console.log(response.ok);
            
            const data = await response.json();
            setloading(false);
            // console.log(data);
            Setquote(data)
        }
        catch(e){
            console.log("hiii");
            
            setloading(false);
        }
        
    }
    useEffect(()=>{
        fetchqoute()
    },[])
    if(loading){
        return<p>loading.........!</p>
    }
    else{
        return(
            <>
                {quote?
                <div>
                    <h1>Random Quote generator</h1>
                    <div className="quote-content">
                        <p>{quote.author}</p>
                        <h3>{quote.quote}</h3>
                    </div>

                    <button onClick={fetchqoute} className="refresh-btn">refresh</button>
                </div>:
                null}
            </>
        )
    }

}
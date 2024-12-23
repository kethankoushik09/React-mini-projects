import { useEffect, useState } from "react";
import "./style.css"

export default function Currency(){
    const [amount,Setamount] = useState(1);
    const [fromcurrency,Setfromcurrency] = useState("EUR")
    const [tocurrency,Settocurrency] = useState("INR")
    const [convertedamount,Setconvertedamount] = useState(2);
    const [loading,Setloading] = useState(false);

    async function convertcurrency() {
        Setloading(true);
        try{
            const response = await fetch(`https://open.er-api.com/v6/latest/${fromcurrency}`);
            const data = await response.json();
            console.log(data?.rates[`${tocurrency}`]);
            const fetchamount = data?.rates[`${tocurrency}`]
            Setconvertedamount((amount*fetchamount).toFixed(2));
             
            Setloading(false);
        }
        catch(e){
            Setloading(false);
        }
        
    }
    useEffect(()=>{
        convertcurrency();

    },[amount,fromcurrency,tocurrency])
    return(
        <>
            <div className="currency-container">
                <h1>Currency-converter</h1>
                <div>
                    <input placeholder="Enter the amount" 
                        value={amount}
                        onChange={(e)=>Setamount(e.target.value)}
                    />
                    <select onChange={(e)=>Setfromcurrency(e.target.value)}>
                        <option value={"USD"}>USD</option>
                        <option value={"INR"}>INR</option>
                        <option value={"EUR"}>EUR</option>
                    </select>
                </div>
                <p>to</p>
                <div>
                    <input placeholder="Enter the amount" 
                      value={convertedamount}
                    />
                    <select onChange={(e)=>Settocurrency(e.target.value)}>
                        <option value={"USD"}>USD</option>
                        <option value={"INR"}>INR</option>
                        <option value={"EUR"}>EUR</option>
                    </select>
                </div>
                <p>{`${amount} in ${fromcurrency} is equal to ${convertedamount} in ${tocurrency}`}</p>
            </div>
        </>
    )
}
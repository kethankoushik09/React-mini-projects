import { useState } from "react"
import "./style.css"

export default function Tabs({customtabs , onChange}){
    console.log(customtabs);
    
    const [currentindex,Setcurrentindex] = useState(0);
    function Toggletab(currentidx){
        Setcurrentindex(currentidx);
        onChange(currentidx);
    }
    return(
        <>
            <div className="wrapper">
                <div className="heading">
                    {customtabs.map((item,idx)=>(
                        <div key={idx}
                         className ={`tab-item ${currentindex === idx? "active":""}`}
                         onClick={()=>Toggletab(idx)}
                         >   
                         <span>{item.label}</span>                     
                        </div>
                    ))}
                </div>
                <div className="container">
                    {customtabs[currentindex] && customtabs[currentindex].content}
                </div>
            </div>
        </>
    )
}
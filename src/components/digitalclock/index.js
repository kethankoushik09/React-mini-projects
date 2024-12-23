import { useState} from "react"
import { useEffect } from "react";
import "./style.css"

export default function Digital(){
    const [time,Settime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
          Settime(new Date())
        },1000)
       
        return()=>{
           clearInterval(intervalId)
        }
    },[])
       
    return(
        <div className="digital- clock">
            <h1>Digital-clock</h1>
            <div className="clock">
                <div className="time">
                    <span>{time.getHours().toString().padStart(2, "0")}</span>:
                    <span>{time.getMinutes().toString().padStart(2,"0")}</span>:
                    <span>{time.getSeconds().toString().padStart(2,"0")}</span>
                </div>
                <div className="date">
                    {time.toLocaleDateString(undefined,{
                        day:"numeric",
                        year:"numeric",
                        month:"long",
                        weekday:"long"
                    })}
                </div>

            </div>

        </div>
    )
}
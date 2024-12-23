import { useEffect, useRef, useState } from "react";
import "./style.css"

export default function Timer({intialtime,onFinsh}){
    const [timer,Settimer] = useState(intialtime);
    const [isRuning,SetisRuning] =useState(true);
    console.log("hiiii" );
    

    const timerrefernce = useRef();
    useEffect(()=>{
        if(isRuning){
            timerrefernce.current = setInterval(()=>{
                Settimer((prevtimer)=>{
                    if(prevtimer === 0){
                        clearInterval(timerrefernce.current);
                        onFinsh();
                        return 0;
                    }
                    else{
                        return(prevtimer-1);
                    }
                })

            },1000)
        }
        return()=>{clearInterval(timerrefernce.current)}
    },[isRuning]);

    const minutes = Math.floor(timer / 60);
    const secounds  = timer % 60;
    function handlepauseandplay(){
        SetisRuning((prev)=>(!prev));
    }
    function handlereset(){
        Settimer(intialtime);
        SetisRuning(false);
    }

    return(
        <>
        <div>
            <h3>
                {String(minutes).padStart(2,"0")}:{String(secounds).padStart(2,"0")}
            </h3>
        </div>
        <div className="buttons-conatiner">
            <button onClick={handlereset}>reset</button>
            <button onClick={handlepauseandplay}>{isRuning?"pause":"Resmue"}</button>
            <button onClick={()=>isRuning(true)} disabled={timer !== intialtime}>start</button>
        </div>
        </>
    )
}
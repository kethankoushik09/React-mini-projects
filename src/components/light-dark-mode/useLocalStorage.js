import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key,defaultValue){
    const [val,Setval] = useState(()=>{
        let temp;
        try{
            temp = JSON.parse(localStorage.getItem(key)||String(defaultValue));
        }
        catch(e){
            temp = defaultValue;
        }
        return temp;
    })
    
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(val));
    },[val])
    
    return [val,Setval];

}
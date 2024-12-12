import { createContext, useContext, useEffect, useState } from "react";
import { fetchcomponentdataserver } from "../data";
const Featureflagcontext = createContext();
export function useFlag(){
    const val = useContext(Featureflagcontext);
    return val;
}
export default function Customfeatureflag({children}){
    const [loading,Setloading] = useState(false);   
    const [enablecomponenets,Setenablecompnents] = useState({});
    async function fetchcomponent(){
        Setloading(true);
        const response = await fetchcomponentdataserver();
        Setenablecompnents(response);
        Setloading(false);
    }

    useEffect(()=>{
        // const response = await fetchcomponentdataserver();
        fetchcomponent();
    },[])

    return(
        <>
         <Featureflagcontext.Provider value={{loading,enablecomponenets}}>
            {children}
         </Featureflagcontext.Provider>
        </>
    )
}
import { useEffect, useState } from "react";

export default function useFetch({url,extra}){
    const [loading,Setloading] = useState(false);
    const [error,Seterror] = useState(false);
    const [users,Setusers] = useState(null);
    async function fetchdata() {
        Setloading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            Setusers(data);
            Setloading(false);
        }
        catch(e){
            Seterror(true);
            Setloading(false);
        }
    }
    useEffect(()=>{
        fetchdata();
    },[url])
    return {loading,error,users};
}
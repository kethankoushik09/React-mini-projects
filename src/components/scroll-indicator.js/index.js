import { useEffect } from "react";
import { useState } from "react"
import "./scroll.css"


export default function Scrollindicator({url}){
    const [data,Setdata] = useState([]);
    const [loading,Setloading] = useState(false);
    const [scrollpercent, Setscrollpercentage] = useState(0);
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        // return()=>{
        //     window.removeEventListener("scroll",()=>{});
        // };
    },[])
    async function fetchdata(url) {
        try{
            Setloading(true);
            const response = await fetch(url);
            const names =await response.json();
            console.log(names);
            Setdata(names.products); 
            Setloading(false);
        }
        catch(e){
            console.log("error occured.....!");
            Setloading(false);
        }
    }
    function handleScroll(){
        // console.log(
        //     // document.body.scroll,
        //     document.documentElement.scrollTop,
        //     document.documentElement.clientHeight,
        //     document.documentElement.scrollHeight
        // );
        const currentheight =  document.documentElement.scrollTop
        const totalheight = document.documentElement.scrollHeight-document.documentElement.clientHeight
        const per = ((currentheight/totalheight)*100);
        // console.log(Math.ceil(per));
        Setscrollpercentage(Math.ceil(per))
        

        
    }

    useEffect(()=>{
        fetchdata(url);

    },[url])

    if(loading){
        return<h1>loading</h1>
    }
    

    return(
        <>
            <div className="total-container">
                <h1>Scroll-indicator</h1>
                <div className="scroll-progress">
                    <div className="current-progress" style={{width:`${scrollpercent}%`}}>
                    </div>
                </div>
            </div>
           
            <div>
                {data && data.length?
                data.map((item,idx)=><p key={idx}>{item.title}</p>):
                null
                }
            </div>
        </>
    )
}
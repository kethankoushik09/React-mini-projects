import { useEffect, useState } from "react";

export default function useChangewindow(){
    const [windowsize,Setwindowsize] = useState({height:0,width:0});
    function handleResize(){
        Setwindowsize({
            height:window.innerHeight,
            width:window.innerWidth
        })
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    },[])
    return {windowsize};
}
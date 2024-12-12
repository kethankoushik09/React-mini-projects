import { useRef } from "react";

export default function Scrollparticulardiv(){
    const sectionref = useRef();
    const data = [
        {
            label:"first-cart",
            style:{
                height:"500px",
                width :"100%",
                background:"red"
            }
        },
        {
            label:"secound-cart",
            style:{
                height:"500px",
                width :"100%",
                background:"green"
            }
        },
        {
            label:"third-cart",
            style:{
                height:"500px",
                width :"100%",
                background:"blue"
            }
        },
        {
            label:"fourth-cart",
            style:{
                hieght:"500px",
                width :"100%",
                background:"black"
            }
        },
        {
            label:"fivth-cart",
            style:{
                height:"500px",
                width :"100%",
                background:"orange"
            }
        },
        {
            label:"sixth-cart",
            style:{
                height:"500px",
                width :"100%",
                background:"pink"
            }
        },
        {
            label:"seventh-cart",
            style:{
                hieght:"500px",
                width :"100%",
                background:"yellow"
            }
        }

    ]
    function handlenavigation(){
        sectionref.current.scrollIntoView({ behavior: "smooth" });
    }
    return(
        <> 
            <h1>scroll-bar</h1>
            <button onClick={handlenavigation}>click to navigate</button>
            {data.map((item,idx)=>(
                <div style={item.style} ref = {idx===3?sectionref:null}>
                    <h1>{item.label}</h1>
                </div>
            ))}
        </>
    )
}
import { useState } from "react";
import "./style.css"

export default function Tooltip(){
    let timeout;
    const [isvisible,Setisvisible] = useState(false);
    function handlevisible(){
        timeout = setTimeout(()=>{
            Setisvisible(true);
        },500)
    }

    return(
        <>
            <div className="tooltip-conatiner"
             onMouseDown={handlevisible}
             onMouseLeave={()=> Setisvisible(false)}>
                <p>hover me</p>
                {isvisible?
                <h4 className="tolltip">Hello world</h4>:
                null}
            </div>
        </>
    )

}
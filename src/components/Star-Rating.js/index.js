import { useState } from "react"
import {FaStar} from "react-icons/fa"
import "./style.css";
import { CgYinyang } from "react-icons/cg";
export default function StarRating({n = 5}){
    const [rating,Setrating ] = useState(0);
    const [hover ,Sethover] = useState(0);
    function handleClick(currentid){
        console.log("handleClick" + currentid);
        Setrating(currentid);
    }
    function handleMouseEnter(currentid){
        console.log("handleMouseEnter" + currentid);
        Sethover(currentid);
    }
    function handleMouseLeave(currentid){
        console.log("handleMouseLeave"+ currentid);
        Sethover(rating);
    }

    return(
        <>
          <h1>STAR RATING</h1>
          <div>
            {[...Array(n)].map((_,index)=>{
                index+=1
                return(
                    <FaStar 
                    key={index}
                    // className={index<= (hover || rating)?"active":"inactive"}
                     onClick={()=>handleClick(index)}
                     onMouseMove={()=>handleMouseEnter(index)}
                     onMouseLeave={()=>handleMouseLeave(index)}
                     size={40}
                     color={index<=hover?"gold":null}
                    />
                    
                )
            })}
          </div>

        </>
    )
}
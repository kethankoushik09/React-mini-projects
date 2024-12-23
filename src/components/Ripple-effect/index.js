import { useEffect, useState } from "react";
import "./style.css"
export default function RippleEffect(){
  const [isRipple,SetisRipple] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: -1, y: -1 });
  useEffect(()=>{
    console.log(coordinates);
    
  },[coordinates])
    function handleRippleEffect(event) {
        console.log(
          event.target.getBoundingClientRect(),
          event.clientX,
          event.clientY
        );
        const rect = event.target.getBoundingClientRect();
        setCoordinates({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
    }
    useEffect(()=>{
      if(coordinates.x !== -1 && coordinates.y !== -1){
        setTimeout(()=>{
          SetisRipple(true);
          setTimeout(()=>{
            SetisRipple(false)
          },300);
        })
      }
    },[coordinates])

    useEffect(()=>{
      if(!isRipple){
        setCoordinates({
          x:-1,y:-1
        })
      }
    },[isRipple])
    return (
        <>
            <div className="Ripple-conatiner">
                <h3>Button Ripple Effect</h3>
                <button onClick={handleRippleEffect}>
                  {isRipple?
                  <span className="inner-span" style={{left:coordinates.x , top:coordinates.y}}></span>:
                  null}
                  Click to see ripple effect
                </button>
            </div>
        </>
    )
}
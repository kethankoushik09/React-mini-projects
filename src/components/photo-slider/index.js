import { use } from "react";
import { useEffect } from "react";
import { useState } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"
import "./style.css"

export function Photoslider(){
    const [images,SetImages] = useState([]);
    const [currentSlide,SetcurrentSlide] = useState(0);
    const [Loading,Setloading] = useState(false);
    const [error,Seterror] = useState(null);
    function Setindex(id){
        SetcurrentSlide(id);
    }
    function handlenext(){
        SetcurrentSlide(currentSlide === images.length-1?0:currentSlide+1);
    }
    function handleprevious(){
        SetcurrentSlide(currentSlide === 0?images.length-1:currentSlide-1);
    }
    useEffect(()=>{
        async function fetching(geturl){
            try{
                Setloading(true);
                const response = await fetch(`${geturl}?page=${1}&limit=${5}`);
                if(!response.ok){
                    throw new Error
                }
                const data = await response.json();
                Setloading(false);
                SetImages(data);
            }
            catch(e){
                Seterror(e.message);

            }
        }
        fetching("https://picsum.photos/v2/list?page=1&limit%20=5");
    },[])
    if(Loading){
        return<h1>Loading........!</h1>
    }
    if(error!== null){
        return <h1>{error}</h1>
    }
    return(
        <>
            <div className="container">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleprevious}/>
                    {images.map((item,idx)=>{
                            return(<img key={idx} alt ={item.author} src={item.download_url} 
                            className={currentSlide === idx?"current-image":"hiden-current-image"}
                        />)
                    })}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={handlenext}/>
                <span className="circle-indicator">
                    {images.map((_,idx)=>(
                        <button key={idx} className={currentSlide === idx
                            ?"current-indicator":
                            "current-indicator inactive-indicator"}
                            onClick={()=>Setindex(idx)}></button>
                    ))}

                </span>
            </div>
            
        </>
    )
    

}
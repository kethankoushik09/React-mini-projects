import data from "./data"
import { useState } from "react"
export  function Accordion(){
    const [select,Setselect] = useState(null);
    const [enablemultiple,Setenablemultiple] = useState(false);
    const [multipleSelect,SetmultipleSelect] = useState([]);
    function selecthandler(currentid){
        Setselect(currentid === select ?null:currentid);
    }
    function multipleSelecthandler(currentid){
        const temp = [...multipleSelect];
        const index = temp.indexOf(currentid);
        if(index === -1){
            temp.push(currentid);
        }
        else{
            temp.splice(index,1);
        }
        SetmultipleSelect(temp);
    }

    return(
        <>
            <div className="wrapper">
                <button onClick={() =>Setenablemultiple(!enablemultiple)}>enbale multiple</button>
                <div className="accordian">
                    {data&&data.length>0?
                    data.map((dataitem,idx)=>(
                        <div key={idx}>
                            <div onClick={enablemultiple?
                                ()=>multipleSelecthandler(dataitem.id):
                                ()=>selecthandler(dataitem.id)}>
                            <h2 >{dataitem.question}</h2>
                            </div>
                            <span>+</span>
                            {enablemultiple?
                                multipleSelect.indexOf(dataitem.id)!== -1 ?<p>{dataitem.answer}</p>:null:
                                select === dataitem.id ? 
                                <p>{dataitem.answer}</p>
                                :null
                            }
                        </div>
                        
                    ))
                    :<h1>no data found !</h1>}
                    
                </div>
            </div>
        </>
    )
}
import { useState } from "react";
import Pagination from ".";
import "./style.css"
export default function Pagenationtest(){
    const [currentpage,Setcurrentpage] = useState(1);
    const dummydata = Array.from({length:100},(_,idx)=>({
        id:idx+1,
        name:`product ${idx+1}`
    }))
    const itemsperpage = 10;
    const lastindex = currentpage*itemsperpage;
    const fisrindex = lastindex-itemsperpage;
    const currentdata = dummydata.slice(fisrindex,lastindex);
    console.log(currentdata);
    function onPageChange(num){
        Setcurrentpage(num);
    }
    return(
        <>
            <h2>pagination</h2>
            <ul className="list-items">
                {currentdata.map((item,idx)=>(
                    <li key={idx}>{item.name}</li>
                ))}
            </ul>
            <Pagination onPageChange={onPageChange} currentpage={currentpage}/>
        </>
    )
}
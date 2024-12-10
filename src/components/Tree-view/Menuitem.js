import { useState } from "react";
import Menulist from "./Menulist";
import "./style.css"
import {FaMinus,FaPlus} from "react-icons/fa"
export default function Menuitem({item}){
    console.log("hiii");
    const [displaycurrentchild,Setdisplaycurrentchild] = useState({});
    function handledisplay(name){
        Setdisplaycurrentchild(
            {...displaycurrentchild,
                [`${name}`]:!displaycurrentchild[name]
            }
        )
    }
    return (
        <li>
            <div className="menu-item">
                <p >{item.label}</p>
                {item && item.children && item.children.length?
                <span onClick={()=>handledisplay(item.label)}>{displaycurrentchild[item.label] ?<FaMinus size={20} color="white"/>:<FaPlus size={20} color="white"/>}</span>:null}
            </div>
            {item.children && item.children.length && displaycurrentchild[item.label]?
             <Menulist list={item.children}/>:
            null}
        </li>
    )
}
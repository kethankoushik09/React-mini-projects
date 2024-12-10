import { useState } from "react"
import Modal from "./modal";

export default function ModalTest(){
    const [showpopup ,Setshowpopup] = useState(false);
    function onClose(){
        Setshowpopup(false);
    }
    return(
        <>
            <div>
                {<button onClick={()=>Setshowpopup(!showpopup)}>modal-popoup</button>}
                {showpopup && <Modal onClose ={onClose}/>}
            </div>
        </>
    )
}
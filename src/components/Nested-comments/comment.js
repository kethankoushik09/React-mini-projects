import {  useState } from "react";
import "./style.css"

export default function Comment({comment,key,handleaddreply}){
    const [input,Setinput] = useState("");
    const [showreply,Setshowreply] = useState(false);
    console.log(!showreply);
    
    function sendreply(){
        console.log(comment.id);
        
        handleaddreply(comment.id,input)
        Setshowreply(false);
        Setinput("");
    }
    function cancelreply(){
        Setshowreply(false);
        Setinput("");

    }
    return(
        // <>
            <li key = {key}>
            <span>{comment.title}</span>
                {(!showreply) && (
                    <>
                        <button onClick={() => Setshowreply(true)}>Add Reply</button>
                        <br/>
                    </>
                )}
                {showreply?
                <>
                    <div>
                        <textarea
                        value={input}
                        onChange={(e)=>Setinput(e.target.value)}
                        rows={'2'}
                        cols={'30'}
                        />
                        <div>
                            <button onClick = {sendreply}>save</button>
                            <button onClick={cancelreply}>cancel</button>
                        </div>
                    </div>
                </>
                :null}
                {comment && comment.children && comment.children.length>0?
                comment.children.map((item,idx)=>(
                    <ul className="list-conatiner">
                        <Comment comment={item} key={idx} handleaddreply={handleaddreply}/>
                    </ul>
                ))
                
                :null}
            </li>
        // </>
    )
}
import { useRef, useState } from "react";
import { useCustomoutside } from "./test";

export default function UseClickoutside(){
    const ref = useRef();
    const [showcontent,Setshowcontent] = useState(false);
    useCustomoutside(ref,()=>Setshowcontent(false))
    return(
        <div>
            {showcontent?
            <div ref={ref}>
                <h1>This is a random content</h1>
                <p>click outside of this content to close
                    this content
                </p>
            </div>:
            <button onClick={()=>Setshowcontent(true)}>Click to show content</button>}
        </div>
    )

}
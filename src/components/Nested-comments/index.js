import { useState } from "react"
import Comment from "./comment";
import "./style.css"

export default function Nestedcoment(){
    const [inputvalue,Setinputvalue] = useState("");
    const [comments,Setcomments] = useState([
        {
            id: 1,
            title: "This is first comment",
            children: [
              {
                id: 2,
                title: "This is child comment one",
                children: [],
              },
              {
                id: 3,
                title: "This is child comment two",
                children: [],
              },
              {
                id: 4,
                title: "This is child comment three",
                children: [],
              },
            ],
          },
        ])

    function addnewcomment(comment){
        return{
            id: new Date().getTime(),
            title:comment,
            children:[]
        }
    }
    function handleaddreply(parentid,comment){
        console.log(parentid);
        
        const updatedcomment = [...comments];
        console.log(updatedcomment);
        findparentid(updatedcomment,parentid,comment)

    }
    function findparentid(updatedcomment,parentid,comment){
        for(let i=0;i<updatedcomment.length;i++){
            const com = updatedcomment[i];
            if(com.id === parentid){
                com.children.unshift(addnewcomment(comment));
                return;
            }
        }
        for (let i = 0; i < updatedcomment.length; i++) {
            findparentid(updatedcomment[i].children,parentid,comment)
        }
        console.log(comments);
        
    }
    function handleaddbutton(){
        Setcomments([addnewcomment(inputvalue),...comments]);
    }

    return(
        <>
            <div>
                <h1>Nested-comments</h1>
                <div className="">
                    <textarea
                    value={inputvalue}
                    onChange={(e)=>Setinputvalue(e.target.value)}
                    rows={'5'}
                    cols={"100"}
                    >
                    </textarea>
                    <br/>
                    <button onClick={handleaddbutton}>Add comment</button>
                    {console.log("callallllllll")}
                    <ul className="list-conatiner">
                       {comments.map((item,idx)=>(
                         <Comment comment = {item} key={idx} handleaddreply={handleaddreply}/>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
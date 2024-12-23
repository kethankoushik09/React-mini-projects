import {useEffect, useState } from "react"
import { db } from "./firebase"
import TodoList from "./todos";
import { addDoc, collection, onSnapshot, updateDoc,doc} from "firebase/firestore";

export default function Todo(){
    const [inputvalue,Setinputvalue] = useState("");
    const [todos,Settodos] = useState([]);
    const [editid,Seteditid] = useState(null)
    console.log(todos);
    
    useEffect(()=>{
        const docRef = onSnapshot(collection(db,"todos"), (snap)=>{
            const bg = snap.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            Settodos(bg);
        })
    },[])

    async function handleAddEdited(){
        editid?
        await updateDoc(doc(db,"todos",editid),{
            todo:inputvalue
        }):
        await addDoc(collection(db,"todos"),{
            todo:inputvalue
        })
        Seteditid(null)
        Setinputvalue("");
    }
    return(
        <>
            <div className="todo-conatiner">
                <h1>Todo-application</h1>
                <div>
                    <input 
                    className="input-area"
                    value={inputvalue}
                    onChange={(e)=>Setinputvalue(e.target.value)}
                    type="text"
                    placeholder="Enter the task"
                    ></input>
                    <button onClick={handleAddEdited}>{editid?"Edited todo":"Add todo"}</button>
                </div>
                {todos.map((todoItem,idx)=>(
                    <TodoList  
                    key={idx} 
                    todoItem = {todoItem} 
                    Setinputvalue={Setinputvalue} 
                    Seteditid = {Seteditid}
                    />
                ))}
            </div>
        </>
    )
}
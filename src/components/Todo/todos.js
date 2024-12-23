import { deleteDoc, doc } from "firebase/firestore"
import { db } from "./firebase"

export default function TodoList({todoItem , Setinputvalue,Seteditid}){
    function handleedit(){
        Seteditid(todoItem.id)
        Setinputvalue(todoItem.todo)
    }
    function handledelete(){
        deleteDoc(doc(db,"todos",todoItem.id))
    }
    return(
        <>
            <div className="list-conatiner">
                <h3>{todoItem?.todo}</h3>
                <button
                onClick={handleedit}>Edit</button>
                <button onClick={handledelete}>Delete</button>
            </div>
        </>
    )
}

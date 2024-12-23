import { useEffect, useState } from "react"
import "./style.css"

export default function Drag(){
    const [loading,Setloading] = useState(false);
    const [todos,Settodos] = useState([]);
    function dragstrat(event,id){
        event.dataTransfer.setData('id',id);
    }
    function ondrop(event,status){
        const id = event.dataTransfer.getData('id');
        console.log(typeof id);
        
        let updatedtodo = todos.filter((item,idx)=>{
            if(item.id.toString()=== id){
                item.status = status;
            }
            return item;
        })
        Settodos(updatedtodo)

    }

    async function fetchtodos() {
        Setloading(true);
        try{
            const response = await fetch("https://dummyjson.com/todos?limit=5&skip=0");
            const data = await response.json();
            Setloading(false);
            Settodos(data.todos.map((item,idx)=>({
                ...item,
                status:"wip"
            })));
            console.log(todos);
            
        }
        catch(e){
            Setloading(false);
            console.log("Error-occured");
        }
    }
    function rendertodos(){
        const todolisttorender = {
            wip:[],
            completed:[]
        }
        todos.forEach((item,idx)=>{
            todolisttorender[item.status].push(
                <div 
                    onDragStart={(e)=>dragstrat(e,item.id)}
                    draggable
                    className="todo-item"
                >
                    {item.todo}

                </div>
            )
        })
        return todolisttorender;
    }

    useEffect(()=>{
        fetchtodos();
    },[])
    if(loading){
        return(<h3>loading...............!</h3>)
    }
    return(
        <>
            <div className="drag-and-drop">
                <h1>drag-and-drop</h1>

                {todos && todos.length ?
                    <div className="blocks-container">
                        <div 
                            className="wip-todo"
                            onDragOver={(e)=>e.preventDefault()}
                            onDrop={(e)=>ondrop(e,"wip")}
                        >
                            <h1>incomplete</h1>
                            {rendertodos().wip}
                        </div>
                        <div 
                            className="completed-todo"
                            onDragOver={(e)=>e.preventDefault()}
                            onDrop={(e)=>ondrop(e,"completed")}
                        >
                            <h1>completed</h1>
                            {rendertodos().completed}
                        </div>
                    </div>
                :null}
            </div>
        </>
    )
}
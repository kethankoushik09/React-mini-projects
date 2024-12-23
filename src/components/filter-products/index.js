import { useEffect, useState } from "react"
import "./style.css"



export default function Filterproducts(){
    const [loading,Setloading] = useState(false);
    const [products,Setproducts] = useState([]);
    const [filterproducts,Setfilterproducts] = useState([]);
    const [currentcategoey,Setcurrentcategoey] = useState("");
    async function fetchproducts(){
        Setloading(true)
        try{
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            console.log(data);
            Setproducts(data.products);
            Setloading(false);

        }
        catch(e){
            console.log("error occured");
        }
    }
    useEffect(()=>{
        fetchproducts();
    },[])

    var filtercategories = products.length?[...new Set(products.map((item)=>item.category))]:[];

    function handlecategory(getname){
        Setcurrentcategoey(currentcategoey === getname?"":getname);
    }

    function filteritems(){
        if(products.length){
            const temp = [...products];
            if(currentcategoey === ""){
                Setfilterproducts(temp);
            }
            else{
                Setfilterproducts(temp.filter((item,idx)=>item.category === currentcategoey));
            }
        }
    }

    useEffect(()=>{
        filteritems();
    },[currentcategoey,products])


    if(loading){
        return <div className="search-animi"></div>
    }
    return(
        <>
            <div>
                
                <h1>filter products by category</h1>
                <div className="category-buttons">
                    {filtercategories && filtercategories.length?
                        filtercategories.map((item,idx)=>(
                            <>
                                <button onClick={()=>handlecategory(item)} 
                                className={currentcategoey === item ? "active":""}>{item}</button>
                            </>
                        )):
                        null
                    }
                </div>
                <ul className="productlist-conatiner">
                    {filterproducts.length?
                        filterproducts.map((item,idx)=>{
                            return(
                                <li key={idx} className="item-list">
                                    <p>{item.title}</p>
                                    <button>{item.category}</button>
                                </li>
                            )
                        }):
                    null}
                </ul>
            </div>
        </>
    )
}
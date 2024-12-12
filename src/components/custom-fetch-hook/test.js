import useFetch from "."
export default function Cutomfetch(){
    const {loading,error,users} = useFetch({url: "https://dummyjson.com/products?limit=100", extra: {}});
    if(loading){
        return(<p>loading...............!</p>)
    }
    return (
        <> 
            <h1>useFetch - hook</h1>
            {   
                users && users.products.length ?
                users.products.map((item,idx)=>(<p key={idx}>{item.title}</p>)):
                null
            }
            <button></button>
        </>
    )
}
import { useEffect, useState } from "react"

export default function Sort(){
    const [users,Setusers] = useState([]);
    const [loading,Setloading] = useState(false);
    const [sort,Setsort]= useState("ascending");
    async function fetchuserdata(){
        Setloading(true);
        try{
            const response = await fetch(`https://dummyjson.com/users`);
            const data = await response.json();
            Setloading(false);
            sort!==""?handlesort(data.users):Setusers(data.users);
        }
        catch(e){
            Setloading(false);
            console.log("error occured......!");
        }
        
    }
    function handlesort(listofdata){
        let copy = [...listofdata];
        if(sort === "ascending"){
            copy = copy.sort((first,secound)=>first.firstName>secound.firstName?1:-1)
        }
        else{
            copy = copy.sort((first,secound)=>first.firstName>secound.firstName?-1:1)

        }
        Setusers(copy);

    }
    useEffect(()=>{
        fetchuserdata();

    },[])
    useEffect(()=>{
        // console.log("hiii");
        console.log(users);
        
        
        handlesort(users)
    },[sort])
    return(
        <>
            <div>
                <h1>sort-data</h1>
                <select onChange={(e)=>Setsort(e.target.value)}>
                    <option value="ascending">sort A-Z</option>
                    <option value="descending">sort Z-A</option>
                </select>
                <ul>
                    {users && users.length?
                    users.map((item,idx)=>(
                        <li key={idx}>{item.firstName}</li>
                    )):null}
                </ul>

            </div>
        </>
    )
}
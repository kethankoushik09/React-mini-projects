import { useEffect, useState } from "react"
import Suggest from "./Suggestin";

export default function Autocomplete(){
    const [users,Setusers] = useState(null);
    const [loading,Setloading] =  useState(false);
    const [error,Seterror] = useState(false);
    const [searchparam,Setsearchparam] = useState('');
    const [filtersusers,Setfilterusers] = useState([]);
    const [showdropdown,Setshowdropdown] = useState(false);
    async function fetchuserdata() {
        try{
            Setloading(true);
            const response = await fetch("https://dummyjson.com/users?limit=100");
            const data = await response.json();
            const temp = data.users.map((item,idx)=>(
                item.firstName
            ))
            // console.log(temp);
            Setusers(temp);
            Setloading(false);
            
        }
        catch(e){
            Setloading(false);
            Seterror(true);
        }
    }
    useEffect(()=>{
        fetchuserdata();
    },[])


    function handlechange(event){
        const query = event.target.value.toLowerCase();
        Setsearchparam(query);
        if(query){
            console.log("searching");
            
            const filterdata = users.filter((item,idx)=>
                (item.toLowerCase().indexOf(query)>-1)
            ) 
            // console.log(filterdata);
            Setfilterusers(filterdata);
            {filterdata.length?
                Setshowdropdown(true):
                Setshowdropdown(false);
            }
        }
        else{
            Setshowdropdown(false);
        }
        

    }
    function handleclick(event){
        Setsearchparam(event.target.innerText);
        Setfilterusers([]);
        Setshowdropdown(false);
    }

    if(loading){
        return<h3>loading..........!</h3>
    }
    if(error){
        return<h3>error....!</h3>
    }
    return(
        <>  
            <div className="autocomplete-container">
                <input
                type="text"
                value={searchparam}
                placeholder="Search for a user.."
                onChange={handlechange}/>
            </div>
            {showdropdown && <Suggest data={filtersusers} handleclick={handleclick}/>}
        </>
    )
}
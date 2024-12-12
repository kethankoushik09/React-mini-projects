import { use, useEffect, useState } from "react"
import User from "./User";

export default function Github(){
    const [username,Setusername] = useState("kethankoushik09");
    const [loading,Setloading] = useState(false);
    const [userdata,Setuserdata] = useState(null);
    async function  fetchgithubaccount() {
        try{
            Setloading(true);
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            Setloading(false);
            console.log(data);
            Setuserdata(data);
        }
        catch(e){
            console.log("not found...!");
            Setloading(false);
        }
        
    }
    useEffect(()=>{
        fetchgithubaccount();
    },[])
    if(loading){
        return(<h3>loading..! please wait</h3>)
    }

    return(
    <>
        <div className="github-profile-container">
            <div className="input-wraper">
                <input type="text" placeholder="Enter user name"
                onChange={(e)=>Setusername(e.target.value)}></input>
                <button onClick={fetchgithubaccount}>Search</button>
            </div>
            {userdata?
            <User user={userdata}/>
            :null}
        </div>

    </>
    )
}
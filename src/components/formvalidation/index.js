import { useEffect, useState } from "react"
import "./style.css"

export default function Formvalidation(){
    const [formData,SetformData] = useState({username:"",email:"",password:""})
    const [errorData,SeterrorData] = useState({username:"",email:"",password:""});
    function handleformchange(event){
        const {name,value} = event.target;
        SetformData((prev)=>({
            ...prev,
            [name]:value
        }))
        console.log(formData);
        validinput(name,value);
    }
    function validinput(name,value){
        switch(name){
            case "username":
                SeterrorData((prev)=>({
                    ...prev,
                    username:
                    value.length < 3?"username should conatin atleast 3 characters":""
                }))
                break;
            case "email":
                SeterrorData((prev)=>({
                    ...prev,
                    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ?"":"invalid email address"
                }))
                break;
            case "password":
                SeterrorData((prev)=>({
                    ...prev,
                    password: value.length<5?"password length shouls be atleast length 5 ":""
                }))
        }
        handledisable()
    }
    function handledisable(){
        console.log("hiiiiiiii");
        
        for (let value of Object.values(errorData)) {
            if(value){
                return true;
            }
        }
        return false;
    }
    function handleonSubmit(event){
        event.preventDefault();
        
        SetformData({username:"",email:"",password:""})
    }
    return(
        <>
            <div className="input-wrapper-container">
                <h3>form-validation</h3>
                <form onSubmit={handleonSubmit}>
                    <div className="input-container">
                        <label htmlFor="username">User Name</label>
                        <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        placeholder="Enter your username"
                        onChange={handleformchange}
                        />
                        <span>{errorData.username}</span>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        value={formData.email}
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleformchange}
                        />
                        <span>{errorData.email}</span>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onChange={handleformchange}
                        />
                        <span>{errorData.password}</span>
                    </div>
                    <button  type="submit" disabled={handledisable}>submit</button>
                </form>
            </div>
        </>
    )
}
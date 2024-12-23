import { useRef } from "react";
import useFetch from "../custom-fetch-hook"
export default function Scrolltopanddown(){
    const {error,loading,users} = useFetch({url:"https://dummyjson.com/products?limit=100",extra:""});
    const bottomRef = useRef();
    function handlescrollbottom(){
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
        // window.scrollTo({
        //     bottom:0,
        //     left:0,
        //     behavior:"smooth"
        // })
    }
    function handleScrollTop(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
    if(loading){
        return<h1>loding............!</h1>
    }
    return(
        <>
            <div>
                <h3>Scroll-up-and-down</h3>
                <button onClick={handlescrollbottom}>scroll to bottom</button>
                <ul>
                    {users && users.products && users.products.length?
                        users.products.map((item,idx)=>(
                        <li key={idx}>{item.title}</li>)):
                        null
                    }
                </ul>
                <button ref={bottomRef} onClick={handleScrollTop}>scroll top</button>
            </div>
        </>
    )
}
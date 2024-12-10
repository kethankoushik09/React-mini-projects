import { useEffect } from "react";
import { useState } from "react"
import "./style.css"

export default function Loadmore(){
    const [loading,Setloading] = useState(false);
    const [error,Seterror] = useState(null);
    const [products,Setproducts] = useState([]);
    const [count,Setcount] = useState(0);
    const [disabled,Setdisabled] = useState(false);
    async function fetchProducts() {
        try{
            Setloading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count*20}&selectatitle,price`);
            // console.log(response.ok);
            
            if(!response.ok){
                throw new Error("failed to fetch..!");
            }
            const data = await response.json();
            Setloading(false);
            Setproducts((prevProducts) => [...prevProducts, ...data.products]);
        }
        catch(e){
            Seterror(e.message);
            Setloading(false);
        }
        
    }

    useEffect(()=>{
        console.log(products);
        if(count<5){
            fetchProducts();
        }
       
    },[count])
    useEffect(()=>{
        products.length === 100?Setdisabled(true):Setdisabled(false);

    },[products])
    if(loading){
        return <h1>loading.....!</h1>
    }
    if(error !== null ){
        return <h1>{error}</h1>
    }
    return(
        <>
            <div className="load-more-container">
                <div className="product-container">
                    {products.length?
                    products.map((item,idx)=>(
                        <div className="product">
                            <img src={item.thumbnail} alt={item.title}/>
                        </div>
                    ))
                    :null
                    }
                </div>
            </div>
            <button onClick={()=>Setcount((prev)=>prev+1)} disabled={disabled} style={{cursor:"pointer"}}>load more...</button>
        </>
    )
}


// import { useEffect, useState } from "react";

// export default function Loadmore() {
//     const [loading, Setloading] = useState(false);
//     const [error, Seterror] = useState(null);
//     const [products, Setproducts] = useState([]);
//     const [count, Setcount] = useState(0);

//     async function fetchProducts() {
//         try {
//             Setloading(true);
//             const response = await fetch(
//                 `https://dummyjson.com/products?limit=20&skip=${count*20}&selectatitle,price`
//             );

//             if (!response.ok) {
//                 throw new Error("Failed to fetch data.");
//             }

//             const data = await response.json();

//             // Append new products to the existing ones
//             Setproducts((prevProducts) => [...prevProducts, ...data.products]);
            

//             Setloading(false);
//         } catch (e) {
//             Seterror(e.message);
//             Setloading(false);
//         }
//     }

//     useEffect(() => {
//         console.log(products);
        
//         fetchProducts();
//     }, [count]);

//     if (loading) {
//         return <h1>Loading.....!</h1>;
//     }

//     if (error !== null) {
//         return <h1>Failed to fetch..</h1>;
//     }

//     return (
//         <>
//             {/* <div>
//                 {products.map((product, index) => (
//                     <div key={index}>
//                         <h3>{product.title}</h3>
//                         <p>{product.price}</p>
//                     </div>
//                 ))}
//             </div> */}
//             <button onClick={() => Setcount((prev) => prev + 1)}>Load more...</button>
//         </>
//     );
// }

// import { useEffect, useState } from "react";

// export default function Loadmore() {
//     const [loading, Setloading] = useState(false);
//     const [error, Seterror] = useState(null);
//     const [products, Setproducts] = useState([]);
//     const [count, Setcount] = useState(0);

//     async function fetchProducts() {
//         try {
//             Setloading(true);
//             // Corrected the query parameter
//             const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}&select=title,price`);

//             if (!response.ok) {
//                 throw new Error("Failed to fetch..!");
//             }

//             const data = await response.json();
//             console.log(data.products);

//             // Append fetched products to existing ones
//             Setproducts((prevProducts) => [...prevProducts, ...data.products]);
//             Setloading(false);
//         } catch (e) {
//             Seterror(e.message);
//             Setloading(false);
//         }
//     }

//     useEffect(() => {
//         if (count < 5) {
//             fetchProducts();
//         }
//     }, [count]);

//     if (loading) {
//         return <h1>Loading.....!</h1>;
//     }
//     if (error !== null) {
//         return <h1>{error}</h1>;
//     }

//     return (
//         <>
//             {/* <div>
//                 {products.map((product, index) => (
//                     <div key={index}>
//                         <h3>{product.title}</h3>
//                         <p>{product.price}</p>
//                     </div>
//                 ))}
//             </div> */}
//             <button onClick={() => Setcount((prev) => prev + 1)} disabled={count >= 5}>
//                 {count < 5 ? "Load more..." : "No more products"}
//             </button>
//         </>
//     );
// }
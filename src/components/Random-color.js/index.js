import { useState } from "react"
export default function RandomColor(){
    const [color,Setcolor] = useState('#000000');
    const [colorType,SetcolorType] = useState('hex');
    function RandomColorUtility(num){
        return Math.floor(Math.random()*num);

    }
    function handleCreateRandomHexaColor(){
        const hexarray = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexcolor = "#"
        for(let i =0;i<6;i++){
            hexcolor+=hexarray[RandomColorUtility(hexarray.length)];
        }
        Setcolor(hexcolor);

    }
    function handleCreateRandomRgbColor(){
        let r = RandomColorUtility(256);
        let g  = RandomColorUtility(256);
        let b = RandomColorUtility(256);
        Setcolor(`rgb(${r},${g},${b})`);

    }

    return(
        <>  
            <h1>Random color</h1>
            <div style={{height:'100vh',
                width:'100vw',
                backgroundColor:color
            }}>
                <button onClick={handleCreateRandomHexaColor }>Create HEXA color</button>
                <button onClick={handleCreateRandomRgbColor}>Create RGB color</button>
                <button
                onClick={colorType === "hex"?
                    handleCreateRandomHexaColor:
                    handleCreateRandomRgbColor}
                >Generate Random color
                </button>
                <div>{color}</div>
            </div>
        </>
    )

}
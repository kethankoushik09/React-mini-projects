import { useState } from "react"
import QRCode from "react-qr-code"
export default function Qrcode(){
    const [qrcode,Setqrcode]= useState("");
    const [input,Setinput] = useState("");
    function handleqrcode(){
        Setqrcode(input);
    }

    return (
    <>
        <h1>qr code</h1>
        <div>
            <input onChange={(e)=>Setinput(e.target.value)}type="text" name="qr-code" placeholder="Enter the value here.."/> 
            <button disabled={input && input.trim() !== "" ?false:true} onClick={handleqrcode}>Generate</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrcode} size={400} bgColor="white"/>
        </div>
    </>)
}
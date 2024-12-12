import { Accordion } from "../Accordion";
import TTT from "../tic-tact-toe/index.js";
import Qrcode from "../Qr-code/index.js"
import Lightdark from "../light-dark-mode"
import ModalTest from "../custom-model/modal-test"
import { useFlag } from "./context/flagcontext";
import Tabslist from "../custom-tab/Tab.js";
import StarRating from "../Star-Rating.js/index.js"
export default function Featureflag(){
    const {loading,enablecomponenets} = useFlag();
    // console.log(enablecomponenets);
    if(loading){
        return(<h1>loading......!</h1>)
    }
    function Checkenablecomponents(name){
        return enablecomponenets[name];

    }
    
    const com = [
        {
            label:"showAccrodian",
            component:<Accordion/>
        },
        {
            label:"showCustommodel",
            component:<ModalTest/>,
        },
        {
            label:"showCustomtab",
            component:<Tabslist/>
        },
        {
            label:"showQrcode",
            component:<Qrcode/>
        },
        {
            label:"showLightdarkmode",
            component:<Lightdark/>
        },
        {
            label:"showStarrating",
            component:<StarRating/>
        },
        {
            label:"Showtictactoe",
            component:<TTT/>
        }
    ]
    return(
        <>
         {com.map((item,idx)=>(
            Checkenablecomponents(item.label)?item.component:null
            
        ))}
        </>
    )
}
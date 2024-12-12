const enablecomponenets={
    showAccrodian:true,
    showCustommodel:true,
    showCustomtab:true,
    showQrcode:false,
    showLightdarkmode:true,
    showStarrating:true,
    Showtictactoe:true,
}

export function fetchcomponentdataserver(){
    return new Promise((resolve,reject)=>{
        if(enablecomponenets){
            setTimeout(resolve(enablecomponenets),5000);
        }
        else{
            reject("Some error occured! Please try again");
        }
    })
}
import Timer from ".";
export default function Timertest(){
    const initialtime = 10;
    function onFinsh(){
        return(<h1>time up..!</h1>)
    }
    return(
        <>
            <h1>Timer</h1>
            <Timer intialtime = {initialtime} onFinsh = {onFinsh}/>
        </>
    )
}
import useChangewindow from ".";
export default function Windhowsize(){
    const {windowsize} = useChangewindow();
    const {height,width} = windowsize;
    return(
        <>
            <h1>height : {height}</h1>
            <h1>width : {width}</h1>
        </>
    )
}
import {useEffect, useState } from "react"
import "./style.css"
export default function TTT(){
    const [squares,Setsquares] = useState(Array(9).fill(''));
    const [xtrun,Setxtrun] = useState(true);
    const [end,Setend] = useState(false);
    const [status,Setstauts] = useState(`Start the game `)
    function Square({value,onClick}){
        return(
        <button className="square" onClick={onClick}>
            {value}
        </button>)
    }
    function getWinner(){
        const wiinerpattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ]
        for(let i=0;i<wiinerpattern.length;i++){
            const[x,y,z] = wiinerpattern[i];
            if(squares[x] && squares[x]===squares[y] && squares[x]===squares[z]){
                return squares[x];
            }
        }
        return  null;
    }
    function handleclick(currentidx){
        const copy_square = [...squares];
        console.log(squares[currentidx]);
        if(copy_square[currentidx] || end){
            return;
        }
        else{
            console.log(currentidx);
            copy_square[currentidx]=xtrun?"X":"O";    
            Setsquares(copy_square);
            Setxtrun(!xtrun);
        }
    }
    function handlerest(){
        Setsquares(Array(9).fill(''));
        Setxtrun(true);
        Setstauts(`Start with X`);
        Setend(false);
    }
    // function handlestatus(){
    //     console.log("handlestatus");
    useEffect(()=>{
        
        if(!getWinner() && squares.every((item)=>item!=="")){
            Setstauts("match wad draw")
        }
        if(getWinner()){
            Setstauts(`winner is ${getWinner()}`);
            Setend(true);
        }
        else{
            Setstauts(` ${xtrun?"O":"X"} players turn `)

        }
    },[squares,xtrun])
    // }
    return(
        <>
            <div className="ttt-conatiner">
                <div className="row">
                    <Square value={squares[0]} onClick = {()=>handleclick(0)}/>
                    <Square value={squares[1]} onClick = {()=>handleclick(1)}/>
                    <Square value={squares[2]} onClick = {()=>handleclick(2)}/>
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick = {()=>handleclick(3)}/>
                    <Square value={squares[4]} onClick = {()=>handleclick(4)}/>
                    <Square value={squares[5]} onClick = {()=>handleclick(5)}/>
                </div>
                <div className="row">
                    <Square value={squares[6]} onClick = {()=>handleclick(6)}/>
                    <Square value={squares[7]} onClick = {()=>handleclick(7)}/>
                    <Square value={squares[8]} onClick = {()=>handleclick(8)}/>
                </div>
            </div>
            <p>{status}</p>
            <button onClick={handlerest}>Restart</button>
        </>
    )
}
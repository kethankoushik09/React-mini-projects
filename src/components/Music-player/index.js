import { useEffect, useRef, useState } from "react";
import "./style.css"
export default function Musicplayer(){
    const [currentindex,Setcurrentindex] = useState(0);
    const [isplaying,Setisplaying] = useState(false);
    const songRef = useRef();
    const [trackprogress,Settrackprogress] = useState(0);

    function handleprev(){
        Setisplaying(false);
        Setcurrentindex((currentindex-1+tracks.length)%tracks.length);
    }
    function handlenext(){
        Setisplaying(false);
        Setcurrentindex((currentindex+1)%tracks.length)
    }
    useEffect(()=>{
        if(isplaying){
            const interval = setInterval(()=>{
                Settrackprogress((songRef.current.currentTime/songRef.current.duration)*100);
            },1000);

            return()=> clearInterval(interval)
        }
    },[isplaying]);
    function handleplayandpause(){
        if(isplaying){
            songRef.current.pause();
        }
        else{
            songRef.current.play();
        }
        Setisplaying(!isplaying);
    }
    const tracks = [
        {
          title: "Track 1",
          source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX26kbcho2PKYi0hxQXnk8SpbdJSGNXc0xTg&s",
        },
        {
          title: "Track 2",
          source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          image: "https://www.premadepixels.com/wp-content/uploads/2021/12/Paradise-Album-Cover-PP1.jpg",
        },
        // Add more tracks as needed
      ];
    return(
        <>
            <div className="music-player-conatiner">
                <h1>musicplayer</h1>
                <div className="music-image">
                    <img src={tracks[currentindex].image} alt="img" className="song-image"/>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{width:`${trackprogress}%`}}></div>
                </div>
                <audio ref={songRef} src={tracks[currentindex].source}></audio>
                <div className="control-buttons">
                    <button onClick={handleprev}>prev</button>
                    <button onClick={handleplayandpause}>{isplaying?"pause":"play"}</button>
                    <button onClick={handlenext}>next</button>
                </div>
            </div>
        </>
    );
}
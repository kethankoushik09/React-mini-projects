import "./style.css"
export default function Pagination({currentpage,totalpages = 10,onPageChange}){
    return(
        <>  
            <div className="buttons-wrapper">
                <button className="prev-btn" disabled={currentpage === 1}
                    onClick={()=>onPageChange(currentpage-1)}>prev</button>
                {[...Array(totalpages)].map((item,idx)=>{
                    idx = idx+1;
                    return(<button key={idx} onClick={()=>onPageChange(idx)}
                    className={currentpage===idx?"current":"btn"}>{idx}</button>)
                })}
                <button className="prev-btn" disabled={currentpage === totalpages} 
                    onClick={()=>onPageChange(currentpage+1)}>next</button>
            </div>
        </>
    )
}
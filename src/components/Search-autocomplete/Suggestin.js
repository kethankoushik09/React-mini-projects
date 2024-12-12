export default function Suggest({data,handleclick}){
    return(
        <>
            <ul>
                {data.map((item,idx)=>(
                    <li key={idx} onClick={handleclick} style={{cursor:"pointer"}}>{item}</li>
                ))}
            </ul>
        </>
    )
}
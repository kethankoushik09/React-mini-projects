import "./style.css"
export default function Modal({id,header,body,footer,onClose}){
    return(
        <>
            <div id={id || "modal"} className="modal">
                <div className="model-conatiner">
                    <span onClick={onClose} className="close-icon">&times;</span>
                    <div className="header">
                        {header?header:<h2>header</h2>}
                    </div>
                    <div className="body"> 
                        {body?body:<h2>body</h2>}
                    </div>
                    <div className="footer">
                        {footer?footer:<h2>footer   </h2>}
                    </div>
                </div>
            </div>
        </>
    )
}
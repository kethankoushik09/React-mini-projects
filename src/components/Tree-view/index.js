import Menulist from "./Menulist"
export default function TreeView({menus=[]}){
    return(
        <>  
            <h1>tree-view </h1>
            <div className="tree-view-container">
                <Menulist list = {menus}/>
            </div>
        </>
    )
}

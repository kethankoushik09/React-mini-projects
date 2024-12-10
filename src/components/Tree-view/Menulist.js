// import Menuitem from "./Menuitem"

import Menuitem from "./Menuitem";
export default function Menulist({list=[]}){
    console.log(list);
    return(
    <ul className="menu-list-container">
        {list&&list.length?
            list.map((item,idx)=>(<Menuitem key={idx} item={item}/>)):
            null
        }
    </ul>
    )

}
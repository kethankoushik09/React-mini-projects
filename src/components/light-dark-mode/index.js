import useLocalStorage from "./useLocalStorage"
import "./style.css";
export  default function Lightdark(){
    const [theme,Settheme] = useLocalStorage("theme","dark");
    function handleToggleTheme(){
        Settheme(theme==="light"?"dark":"light");
    }
    return(
        <>  
            <div className="light-dark" data-theme={theme}>
                <div className="container">
                    <h3>Hello world!</h3>
                    <button onClick={handleToggleTheme}>Change Theme</button>
                </div>
            </div>
            
        </>
    )
}
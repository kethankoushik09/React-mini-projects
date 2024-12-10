// import accordion from "./components/Accordion/index";
// import { Accordion } from "./components/Accordion/index";
// import RandomColor from "./components/Random-color.js";
// import StarRating from "./components/Star-Rating.js/index";
// import { Photoslider } from "./components/photo-slider";
// import TreeView from "./components/Tree-view";
// import menus from "./components/Tree-view/data";
// import Loadmore from "./components/load-more-button";
// import Lightdark from "./components/light-dark-mode";
// import Qrcode from "./components/Qr-code";
// import Scrollindicator from "./components/scroll-indicator.js";
import Tabslist from "./components/custom-tab/Tab";
function App() {
  return (
    <>
      <div className="outer">
        {/* <RandomColor/> */}
        {/* <StarRating/> */}
        {/* <Photoslider/> */}
        {/* <Loadmore/> */}
        {/* <TreeView menus={menus}/> */}
        {/* <Qrcode/> */}
        {/* <Lightdark/> */}
        {/* <Scrollindicator url={"https://dummyjson.com/products?limit=100"}/> */}
        <Tabslist/>
      </div>
    </>
  );
}

export default App;

import Tabs from "./Maintb";
export default function Tabslist(){


    function RandomComponent(){
      return(
        <div>This is content for Tab 3</div>
      )
    }
    const tabs = [
        {
          label: "Tab 1",
          content: <div>This is content for Tab 1</div>,
        },
        {
          label: "Tab 2",
          content: <div>This is content for Tab 2</div>,
        },
        {
          label: "Tab 3",
          content: <RandomComponent />,
        },
    ]
    console.log(tabs);
    function handletab(getcurrentindex){
        console.log(tabs[getcurrentindex].label);
    }
    return(
      
      
        <Tabs customtabs={tabs} onChange={handletab}/>
    )
}
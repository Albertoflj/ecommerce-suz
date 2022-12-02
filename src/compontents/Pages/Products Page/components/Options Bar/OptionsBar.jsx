import LinkedIn from "../../../../../Assets/icons/icons/linkedin.svg";
import "./optionsbar.scss";

const OptionsBar = () =>{
    
    return <>
    
    <div className="options-bar padding">
        <div className="options-filter">
            
        </div>
        <div className="options-bar-content">

        <button onClick={"open filter"}>
            <img src={LinkedIn} alt="filter"/>
        </button>
        <button onClick={"open sort"}>
            <img src={LinkedIn} alt="filter"/>
        </button>
        </div>
        <br/>
    </div>
    
    </>
}

export default OptionsBar;
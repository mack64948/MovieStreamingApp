import "./index.scss";
import { useState } from "react";

const categories = ["all","drama","action","adventure","animation","biography"]

export const Dropdown = ({configureAPIEndpoint}) => {

    const [isShowingCategories,setIsShowingCategories] = useState(false);

    const mouseOverCallback = (e) => {
        e.preventDefault();
        setIsShowingCategories(true)
    };

    const mouseLeaveCallback = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setIsShowingCategories(false)
        },1000);
    }

    return (<div className="category-selector" 
                onMouseLeave={mouseLeaveCallback}
                onMouseOver={mouseOverCallback} >

    <a className="dropdown-link"><p>Categories</p></a>

    {isShowingCategories && <div className="category-dropdown">
        
    {categories.map((category) => {

        let apiEndpoint = category === "all" ? 
            "http://127.0.0.1:8000/api/v1/titles/" :
            `http://127.0.0.1:8000/api/v1/titles?genre=${category}` ;

        return (
            <a href="" onClick={
                (e) => {
                    e.preventDefault();
                    configureAPIEndpoint(apiEndpoint);
                }}>
            <p>{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}</p>
            </a>)
        })}

       
        
       
       
    
    
     
    </div>}
    </div>);
}
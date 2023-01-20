import { useState } from "react";
import "./index.scss";


export const BasicMinMaxSelector = ({configureAPIEndpoint}) => {
    const [minYear, setMinYear] = useState(1900);
    const [maxYear, setMaxYear] = useState(2023);

    const isValidRange = () => {
        return maxYear > minYear;
    }

    return (<div className="wrapper">
        <div className="slidecontainer">
        <p>
            <label>Min Year: </label>
            <input onChange={
                (e) => { 
                    setMinYear(e.target.value)
                    if(isValidRange()){
                        configureAPIEndpoint(`http://localhost:8000/api/v1/titles?min_year=${minYear}&max_year${maxYear}`);
                    }
                }
            } type="range" min="1900" max="2023" value={minYear} class="slider" id="myRange"  />
            <span>{minYear}</span>
        </p>

        <p>
            <label>Max Year: </label>
            <input onChange={
                (e) => { 
                    setMaxYear(e.target.value)
                    if(isValidRange()){
                        configureAPIEndpoint(`http://localhost:8000/api/v1/titles?min_year=${minYear}&max_year${maxYear}`);
                    }
                }
            } type="range" min="1900" max="2023" class="slider" value={maxYear} id="myRange" />
            <span>{maxYear}</span>
        </p>
      
    </div>
    {!isValidRange() && <p className="error-message">
            Invalid Range.  The maximum year must be greater than the minimum year.
        </p>}
    </div>);
}
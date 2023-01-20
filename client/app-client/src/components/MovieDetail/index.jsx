import { useEffect, useState, useReducer } from "react"
import "./index.scss"
import genericMoviePoster from "../../assets/movie-poster-gone2.jpeg"
const reducer = (state, action) => {

    if(action.type === "actors"){

    } else if(action.type === "directors"){

    } else if(action.type === "writers"){
        
    } else if(action.type === "directors"){
        
    }
}

const getFormattedListString = (arrayData) => {
    return arrayData.map((item,index) => {
        return index === arrayData.length-1 ? item : item + ", ";
    })
}

export const MovieDetail = ({jsonMovieDetails}) => {
    // const [state, dispatch] = useReducer(reducer,jsonMovieDetails)
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/titles/2423")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    },[]);

    

    return (<div>
       
       {data && <div className="movie-card">
    <img src={genericMoviePoster} />
    <div>
        <h3>{data["title"]}</h3>
        <p><label>Director(s):</label> {getFormattedListString(data["directors"])}</p>
        <p><label>Year:</label> {data["year"]}</p>
        <p><label>Duration:</label> {data["duration"]} minutes</p>
        <p><label>Genres:</label> {getFormattedListString(data["genres"])}</p>
        <p>{data["long_description"]}</p>
        <div>
            <button>
                <i class="fa-regular fa-circle-play"></i>
            </button>
        </div>
    </div>
    <div>
        <p><label>Available in:</label> {getFormattedListString(data["languages"])}</p>
        <p><label>Countries:</label> {getFormattedListString(data["countries"])}</p>
        <p><label>Starring:</label> {getFormattedListString(data["actors"])}</p>
    </div>
    <div>
        <p><label>Votes:</label> {data["votes"]}</p>
        <p><label>IMDB Score:</label> {data["imdb_score"]}</p>
        <p><label>Review from Critics:</label> {data["reviews_from_critics"]}</p>
        <p><label>Reviews from Users:</label> {data["reviews_from_users"]}</p>

    </div></div> }
    </div>);
}
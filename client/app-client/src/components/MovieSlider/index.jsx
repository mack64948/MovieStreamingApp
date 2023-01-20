import "./index.scss";
import { useEffect, useState } from "react";
import { useFetchMovie, useFetchMovies } from "../../utils/hooks";

const getFormattedListItems = (someList) => {
    
    return someList && someList.map((listItem,index) => {
        return index === someList.length - 1 ? listItem : listItem + ", "; 
    })
}

export const MovieSlider = ({apiEndpoint}) => {
  
    const [selectedURL,setSelectedURL] = useState("");
    const {isLoading, movieDetailJSON} = useFetchMovie(selectedURL);
    const {isLoadingResults, results} = useFetchMovies(apiEndpoint);

    return (<div className="main-container">
    
        <div className="slider">
            {!isLoadingResults && results.map((result,index) => {
               
                return <a key={result["title"]+index} href="" onMouseLeave={ (e) => {
                    setSelectedURL("");
                }}  onMouseEnter={ (e) => {
                    e.preventDefault();
                    setSelectedURL(result["url"]);
                    }}>
                    <div className="movie-card">
                    <img src={result["image_url"]} />
                    <div className="overlay">
                        <p>{result["title"]}</p>
                        <p>Genres: { getFormattedListItems(movieDetailJSON["genres"]) }</p>
                    </div>
                </div></a>;
            })}
    </div>
    { !isLoading && selectedURL && <div className="movie-detail-view">
            <div>
                <img src={movieDetailJSON["image_url"]}/>
            </div>
            <div>
               
                <p>  
                    <span className="movie-title">{movieDetailJSON["title"]}</span>
                    <br/>
                    {movieDetailJSON["year"]} &bull;  {movieDetailJSON["duration"]} m </p>
                <p className="movie-description"> {movieDetailJSON["long_description"]}</p>
            </div>
            <div>
            <p> <label>Starring:</label> {getFormattedListItems(movieDetailJSON["actors"])}</p>
            <p> <label>Directors:</label> {getFormattedListItems(movieDetailJSON["directors"])}</p>
                <p> <label>IMDB Score:</label> {movieDetailJSON["imdb_score"]} minutes</p>
                <p> <label>Votes: </label>{movieDetailJSON["votes"]} minutes</p>
                <p> <label>Average Vote:</label> {movieDetailJSON["avg_vote"]} minutes</p>

            </div>
    </div> }
    </div>);
}
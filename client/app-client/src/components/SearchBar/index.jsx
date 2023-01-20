import { useState } from "react";

export const Searchbar = ({configureAPIEndpoint}) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchCategory,setSearchCategory] = useState("title");
    

    return (<div className="search-bar">
                
    <div className="search-bar-left">
        <label id="search-bar-input">Search By:</label>
        <select onChange={ (e) => {
            setSearchCategory(e.target.value);
        }}>
            <option value="title">Title</option>
            <option value="director">Director</option>
            <option value="country">Country</option>
            <option value="genre">Genre</option>
            <option value="actor">Actor</option>
            <option value="language">Language</option>
        </select>
    </div>
    <div className="search-bar-right">
        <input onChange={
            (e) => {
                setSearchTerm(e.target.value);
            }
        } type="text" id="search-bar-input" />
        <button onClick={ (e) => {
            configureAPIEndpoint(`http://localhost:8000/api/v1/titles?${searchCategory}_contains=${searchTerm}`)
        }}>Search</button>
    </div>
</div>)
}
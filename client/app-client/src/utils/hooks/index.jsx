import {useState, useEffect} from "react"


export function useFetchMovies(apiEndpoint){

    const [results,setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!apiEndpoint) return;

        async function fetchData(){
         
            const response = await  fetch(apiEndpoint);
            const data = await response.json(); 

            setResults(data["results"]);

            setIsLoading(false);
        }

        setIsLoading(true);

        fetchData();

    },[apiEndpoint])

    return {isLoading,results}
}


export function useFetchMovie(selectedURL){

    const [movieDetailJSON,setMovieDetailJSON] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!selectedURL) return;

        async function fetchData(){
         
            const response = await  fetch(selectedURL);
            const data = await response.json(); 

            setMovieDetailJSON(data);

            setIsLoading(false);
        }

        setIsLoading(true);

        fetchData();

    },[selectedURL])

    return {isLoading,movieDetailJSON}
}
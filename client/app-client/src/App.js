
import './App.css';
import { useState } from "react"
import { MovieDetail } from './components/MovieDetail';
import { MovieSlider } from './components/MovieSlider';
import { Header } from './components/Header';
function App() {

  const [apiEndoint,setAPIEndpoint] = useState("http://127.0.0.1:8000/api/v1/titles/");

  
  return (
    <div>
      <Header configureAPIEndpoint={
        (endpoint) => {
          console.log(endpoint);
          setAPIEndpoint(endpoint);
        }
      }></Header>
      <MovieSlider apiEndpoint={apiEndoint}></MovieSlider>
    </div>
  );
}

export default App;

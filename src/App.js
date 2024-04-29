import React from "react";
import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";



// 1f0788ce

const Api_URL="http://www.omdbapi.com/?apikey=1f0788ce";

const movie1={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}
const App = () =>{
const [movies,setMovies] = useState([]);
const [searchTerm, setsearchTerm]=useState('');

    const searchMovies= async (title) => {
        const response = await fetch(`${Api_URL}&s=${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);

    }

    useEffect(() =>{
        searchMovies('ice age');
    },[])
    return(
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input placeholder="search for movies" 
            value={searchTerm} onChange={(e) =>setsearchTerm(e.target.value)}/>
            <img src={SearchIcon} alt="search" 
            onClick={() => searchMovies(searchTerm) } />
        </div>

        {
            movies?.length > 0 ? (<div className="container">
            {/* <MovieCard movie1={movies[0]}/> */}
            {movies.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
        </div> ) : (<div className="empty"> No Movies Found </div>)
        }
        
    </div>
    
    );
}


export default App;
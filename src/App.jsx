import { useState, useEffect } from "react";

import MovieCard from './MovieCard'

import './App.css'
import SearchIcon from './search.svg'
const imdbID = 'tt0145487'

//const API_URL = 'http://www.omdbapi.com?apikey=69b70cc1'
//const RATING_URL = `https://movies-ratings2.p.rapidapi.com/ratings?id=${imdbID}]`
const IMDB_URL = `https://imdb-movies-web-series-etc-search.p.rapidapi.com/${searchTerm}+.json`
const RAPIDAPI_HOST = 'imdb-movies-web-series-etc-search.p.rapidapi.com';
const RAPIDAPI_KEY = '3fc9f8e71fmsh32bef10f957d078p1809d4jsn79aa39f6d468';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_URL}&s=${title}`);
    //     const data = await response.json();
    //     setMovies(data.Search);
    // }

    // const [ratings, setRatings] = useState([]);

    // const searchRatings = async (ratings) => {
    //     const response = await fetch(`${RATING_URL}&s=${ratings}`);
    //     const data = await response.json();
    //     setRatings(data.Search);
    // }

    const searchMovies = async (title) => {
        const response = await fetch(`${IMDB_URL}?s=${title}`, {
            method: 'GET',
            headers: {
                'x-rapidapi_host': RAPIDAPI_HOST,
                'x-rapidapi_key': RAPIDAPI_KEY
            }
        });
        const data = await response.json();
        setMovies(data.Search);
    }



    useEffect(() => {
        searchMovies('')
        searchRatings('')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {
                        searchMovies(searchTerm)
                    }}
                />
            </div>
            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;
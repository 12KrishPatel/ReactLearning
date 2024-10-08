import { useState, useEffect } from "react";

import MovieCard from './MovieCard'

import './App.css'
import SearchIcon from './search.svg'

const RAPIDAPI_HOST = 'imdb-movies-web-series-etc-search.p.rapidapi.com';
const RAPIDAPI_KEY = '3fc9f8e71fmsh32bef10f957d078p1809d4jsn79aa39f6d468';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const IMDB_URL = `https://${RAPIDAPI_HOST}/${title}.json`

        const response = await fetch(IMDB_URL, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': RAPIDAPI_HOST,
                'x-rapidapi-key': RAPIDAPI_KEY
            }
        });
        const data = await response.json();
        setMovies(data.d);
    }



    useEffect(() => {
        searchMovies('')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies (Please keep your search to one word!)"
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
                            <MovieCard key={movie.id} movie={movie} />
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
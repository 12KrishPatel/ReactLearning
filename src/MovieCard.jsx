import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.y}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.l} />
            </div>
            <div>
                <span>{movie.q}</span>
                <h3>{movie.l}</h3>
            </div>
        </div>
    )
}

export default MovieCard;
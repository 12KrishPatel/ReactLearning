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
                <span>{movie.qid}</span>
                <h3>{movie.l}</h3>
                <div className="hover-text">
                    <span className="hover-content">Rank: {movie.rank}</span>
                    <span className="hover-text">Hover to see my rank</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
import React from "react";
import PropTypes from "prop-types";

function Movie({rank, movieNm, poster}){
    return <div className="movie">
        <h2 className="movie__rank">{rank}위</h2>        
        <h1 className="movie__title">{movieNm}</h1>
        <img className="movie__poster" src={poster} alt={movieNm} title={movieNm}/>

    </div>
    
}

Movie.propTypes = {
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
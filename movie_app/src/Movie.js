import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genre">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' ...'
                    trimRight
                    basedOn='letters'
                    />

                </div>
            </div>
            
            
        </div>
    );
}
// stateless component 형태로 MoviePoster 를 변환, 업데이트니 복잡한 기능이 없을때 사용
function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} className="Movie__Poster" /> 
    );
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title:propTypes.string.isRequired,
    poster:propTypes.string.isRequired,
    genres:propTypes.array.isRequired,
    synopsis:propTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre:propTypes.string.isRequired
}
export default Movie;

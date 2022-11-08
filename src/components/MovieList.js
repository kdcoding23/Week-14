import React from 'react';

// displays each film from the movies array and returns each movie's image poster
const MovieList = (props) => {
    const StarsComponent = props.starsComponent;

    return (
        <>
            {props.movies.map((movies, movieInfo) => (
            // makes images into flex items inside the div 
            <div className='image-container d-flex justify-content-start'>
                <img src={movies.img} alt="movie"></img>
                <div className='overlay d-flex align-items-center justify-content-center'>
                    <StarsComponent />
                </div>
                <div className='movie-info'>
                    <h3>{movies.title}</h3>
                    <h4>{movies.year}</h4>
                    <p>{movies.info}</p></div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
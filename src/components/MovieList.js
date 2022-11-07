import React from 'react';

// displays each film from the movies array and returns each movie's image poster
const MovieList = (props) => {
    const StarsComponent = props.starsComponent;
    // const MovieComponent = props.movieCompenent;

    return (
        <>
            {props.movies.map((movie, index) => (
            // makes images into flex items inside the div 
            <div className='image-container d-flex justify-content-start'>
                <img src={movie.img} alt="movie"></img>
                <div className='overlay d-flex align-items-center justify-content-center'>
                    {/* <MovieComponent /> */}
                    <StarsComponent />
                </div>
            </div>
            ))};
        </>
    );
};

export default MovieList;
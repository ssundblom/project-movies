import React from 'react'
import { Link } from 'react-router-dom'

import "./css/MovieDetails.css"
import { BackButton } from 'BackButton.js'

export const MovieDetails = ({ title, overview, vote_average, backdrop_path, poster_path, backbutton }) => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
    const BACKDROP_SIZE = '/w1280'
    const POSTER_SIZE = '/w300'



    return (
        <section className='movie-details'>
            
            <div className="overlay">
                <img className="background" src={`${IMAGE_BASE_URL + BACKDROP_SIZE + backdrop_path}`} alt='backdrop'></img>
            </div>

            <div className="movie-info">
                <img className="poster" src={`${IMAGE_BASE_URL + POSTER_SIZE + poster_path}`} alt='poster'></img>

                <div className="details">
                    <Link className="back-button" to='/'>
                        <BackButton /> Movies
                    </Link>

                    <h3>{title} <span className="vote">{vote_average} / 10</span></h3>
                    <p>{overview}</p>
                </div>
            </div>

        </section>
    )
}
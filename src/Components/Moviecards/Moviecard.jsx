import React from 'react';
import "./Moviecard.css";
import { useEffect, useState } from 'react';
import axios from '../../axios';
import { IMG_URL } from "../../constants/constant"


function Moviecard(props) {
    let [movieCard, setMovieCard] = useState([]);

    useEffect(() => {
        axios.get(props.url).then(res => {
            console.log(res.data);
            setMovieCard(res.data.results);
        }).catch(error => {
            alert("Network Error")
        })
    }, [])

    return (
        <div className='card-container'>
            <h3 className='genere-tag'>{props.title}</h3>
            <div className='movie-card'>
                {movieCard.map((movie) => {
                    return (
                        <div className={props.isSmall ? "card-image-small" : "card-image"}>
                            <img src={`${IMG_URL + movie.backdrop_path}`} alt="movie-card" className={props.isSmall ? "card-image-small" : "card-image"} />
                            <span className='card-movie-name'>{movie.name ? movie.name : movie.original_title}</span>
                            <br />
                            <small className=''><i className="fa-solid fa-star movie-card-star"></i>{movie.vote_average}</small>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Moviecard
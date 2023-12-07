import React, { useState } from 'react';
import { API_KEY, IMG_URL } from "../../constants/constant"
import "./Banner.css";
import { useEffect } from 'react';
import axios from "../../axios";


function Banner() {
    let [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
            setMovie(res.data.results[4]);
        })
    }, [])

    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? IMG_URL + movie.backdrop_path : ""})` }}>
            <div className='banner-texts'>
                <div className='banner-texts-container'>
                    <h1 className='movie-name'>{movie ? movie.original_name : ""}</h1>
                    <p className='movie-description'>{movie ? movie.overview : ""}</p>
                </div>
                <div className='banner-btn-container'>
                    <button className='banner-btn1'><i className="fa-solid fa-play"></i></button>
                    <button className='banner-btn2'>My List</button>
                </div>
            </div>
            <div className='fade-bottom'></div> 
        </div>
    )
}

export default Banner
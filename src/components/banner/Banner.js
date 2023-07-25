import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../axios'
import './banner.css'


function Banner() {
  const [movie,setMovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  },[]);
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}} className='banner'>
        <div className="content">
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className="banner_btns">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <p className='description'>{movie ? movie.overview : ''}</p>
        </div>
      
    </div>
  )
}

export default Banner

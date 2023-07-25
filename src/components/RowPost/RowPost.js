import React,{useEffect,useState} from 'react'
import {imageUrl } from '../../constants/constants'
import './rowpost.css'
import axios from '../axios'

function RowPost(props) {
  const [movies,setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err => {
    })
  },[])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj) => {
            return(
              <img className={props.isSmall ? 'smallPosterImg' : 'posterImg'} src={`${imageUrl+obj.backdrop_path}`} alt="drama" />
            )
          })}
        </div>
    </div>
  )
}

export default RowPost

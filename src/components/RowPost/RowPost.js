import React from 'react'
import posterImg from '../assets/card.jpg'
import './rowpost.css'

function RowPost() {
  return (
    <div className='row'>
        <h2>Title</h2>
        <div className="posters">
            <img className='posterImg' src={posterImg} alt="drama" />
            <img className='posterImg' src={posterImg} alt="drama" />
            <img className='posterImg' src={posterImg} alt="drama" />
            <img className='posterImg' src={posterImg} alt="drama" />
            <img className='posterImg' src={posterImg} alt="drama" />
            <img className='posterImg' src={posterImg} alt="drama" />
            <img className='posterImg' src={posterImg} alt="drama" />
            <img className='posterImg' src={posterImg} alt="drama" />
        </div>
    </div>
  )
}

export default RowPost

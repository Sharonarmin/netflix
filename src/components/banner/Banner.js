import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className='title'>Movie Name</h1>
            <div className="banner_btns">
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis possimus <br/> quas autem doloremque eum perferendis laboriosam repellendus mollitia dolorum.</p>
        </div>
      
    </div>
  )
}

export default Banner

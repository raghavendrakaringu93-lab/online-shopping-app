import React from 'react'
import './Banner.css'
import banner from '../../../../public/assets/banner1.jpg'

const Banner = () => {
  return (
    <>
    <h4>Exclusive Offers For you...</h4>
      <div className='bannerSection'>
        <img src={banner} alt="" />
      </div>

    </>
  )
}

export default Banner
import React from 'react'
import './Banner2.css'
import banner2 from '../../../../public/assets/banner2.jpg'

const Banner = () => {
  return (
    <>
    <h4>Exclusive Offers For you...</h4>
      <div className='bannerSection'>
        <img src={banner2} alt="" />
      </div>

    </>
  )
}

export default Banner
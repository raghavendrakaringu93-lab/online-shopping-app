import React from 'react'
import './Header.css'
import banner from '../../../../public/assets/Header-banner.jpg';

const Header = () => {
  return (
    <div className='headerSection'>
        <img src={banner} alt=""/>
    </div>
  )
}

export default Header
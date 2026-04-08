import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import Header from '../../components/header/Header'

import Products from '../../components/products/Products'

const Home = () => {
  return (
    <div>
        <Header/>
        <Products/>
    </div>
  )
}

export default Home
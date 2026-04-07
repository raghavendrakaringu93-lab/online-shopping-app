import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

import Products from '../../components/products/Products'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Products/>
    </div>
  )
}

export default Home
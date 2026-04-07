import React from 'react'
import './Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

import { useCart } from '../../context/CartContext'
import { useTheme } from '../../context/ThemeContext/ThemeContext'

const Navbar = () => {

  const { theme, toggleTheme} = useTheme();
    const location = useLocation();

    const {cartItems} = useCart();
    return (
        <>
            <div className='navSection'>
                <div className="title">
                    <h2>OnLine.</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder='What you want...' />
                </div>
                <div className="user">
                    <div className={theme === "light" ? "themeButton" : "themeButton dark"}>
                      <button onClick={toggleTheme}>
                        
                      

                        {theme === "light" ? "Dark" : "Light"}
                      </button>
                    </div>
                    
                    <div className="userdetails">
                        <h4>SignIn</h4>
                    </div>
                    <NavLink to='/cart' className={() => 
                      (location.pathname === '/cart' || location.pathname.startsWith('/cart')) ? "nav-link active" : "nav-link"}>
                        <div className="cart">
                          <h4>Cart</h4>
                          <span>{cartItems.length}</span>
                        </div>
                    </NavLink>
                </div>

            </div>
            <div className="subMenu">
                <ul>
                    <NavLink to='/' className={({ isActive})=> 
                      isActive ?  "nav-link active": "nav-link"}>
                        <li>For you</li>
                    </NavLink>
                    <NavLink to='/Mobiles' className={() => 
                      (location.pathname === '/Mobiles' || location.pathname.startsWith('/mobile')) ? "nav-link active" : "nav-link"}>
                        
                        <li>Mobiles</li>
                    </NavLink>
                    <NavLink to='/Computers' className={() => 
                      (location.pathname === '/Computers' || location.pathname.startsWith('/computer')) ? "nav-link active" : "nav-link"}>
                         <li>Computers</li>
                    </NavLink>
                    <NavLink to='/Watches' className={() => 
                      (location.pathname === '/Watches' || location.pathname.startsWith('/watch')) ? "nav-link active" : "nav-link"}>
                        <li>Watches</li>
                    </NavLink>
                    <NavLink to='/Mens' className={() => 
                      (location.pathname === '/Mens' || location.pathname.startsWith('/men')) ? "nav-link active" : "nav-link"}>
                        <li>MensFashion</li>
                    </NavLink>
                    <NavLink to='/Women' className={() => 
                      (location.pathname === '/Women' || location.pathname.startsWith('/women')) ? "nav-link active" : "nav-link"}>
                        <li>Woman</li>
                    </NavLink>
                    <NavLink to="/Furniture" className={() => 
                      (location.pathname === '/Furniture' || location.pathname.startsWith('/furniture')) ? "nav-link active" : "nav-link"}>
                        <li>Furniture</li>
                    </NavLink>
                    <NavLink to="/Ac" className={() => 
                      (location.pathname === '/Ac' || location.pathname.startsWith('/ac')) ? "nav-link active" : "nav-link"}>
                        <li>Ac</li>
                    </NavLink>
                    <NavLink to='/Kitchen' className={() => 
                      (location.pathname === '/Kitchen' || location.pathname.startsWith('/kitchen')) ? "nav-link active" : "nav-link"}>
                        <li>Kitchen</li>
                    </NavLink>
                    <NavLink to='/Tv' className={() => 
                      (location.pathname === '/Tv' || location.pathname.startsWith('/tv')) ? "nav-link active" : "nav-link"}>
                        <li>Tvs</li>
                    </NavLink>
                    <NavLink to='/Speakers' className={() => 
                      (location.pathname === '/Speakers' || location.pathname.startsWith('/speaker')) ? "nav-link active" : "nav-link"}>
                        <li>Speakers</li>
                    </NavLink>
                    <NavLink to='/Fridges' className={() => 
                      (location.pathname === '/Fridges' || location.pathname.startsWith('/fridge')) ? "nav-link active" : "nav-link"}>
                         <li>Fridges</li>
                    </NavLink>
                    <NavLink to='/Books' className={() => 
                      (location.pathname === '/Books' || location.pathname.startsWith('/book')) ? "nav-link active" : "nav-link"}>
                        <li>Books</li>
                    </NavLink>
                    


                </ul>
            </div>

        </>
    )
}

export default Navbar
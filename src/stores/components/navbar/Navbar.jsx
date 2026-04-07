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
                    <NavLink to='/pagemobiles' className={() => 
                      (location.pathname === '/pagemobiles' || location.pathname.startsWith('/mobile')) ? "nav-link active" : "nav-link"}>
                        
                        <li>Mobiles</li>
                    </NavLink>
                    <NavLink to='/pagecomputers' className={() => 
                      (location.pathname === '/pagecomputers' || location.pathname.startsWith('/computer')) ? "nav-link active" : "nav-link"}>
                         <li>Computers</li>
                    </NavLink>
                    <NavLink to='/pagewatches' className={() => 
                      (location.pathname === '/pagewatches' || location.pathname.startsWith('/watch')) ? "nav-link active" : "nav-link"}>
                        <li>Watches</li>
                    </NavLink>
                    <NavLink to='/pagemens' className={() => 
                      (location.pathname === '/pagemens' || location.pathname.startsWith('/men')) ? "nav-link active" : "nav-link"}>
                        <li>MensFashion</li>
                    </NavLink>
                    <NavLink to='/pagewomen' className={() => 
                      (location.pathname === '/pagewomen' || location.pathname.startsWith('/women')) ? "nav-link active" : "nav-link"}>
                        <li>Woman</li>
                    </NavLink>
                    <NavLink to="/pagefurniture" className={() => 
                      (location.pathname === '/pagefurniture' || location.pathname.startsWith('/furniture')) ? "nav-link active" : "nav-link"}>
                        <li>Furniture</li>
                    </NavLink>
                    <NavLink to="/pageac" className={() => 
                      (location.pathname === '/pageac' || location.pathname.startsWith('/ac')) ? "nav-link active" : "nav-link"}>
                        <li>Ac</li>
                    </NavLink>
                    <NavLink to='/pagekitchen' className={() => 
                      (location.pathname === '/pagekitchen' || location.pathname.startsWith('/kitchen')) ? "nav-link active" : "nav-link"}>
                        <li>Kitchen</li>
                    </NavLink>
                    <NavLink to='/pagetvs' className={() => 
                      (location.pathname === '/pagetvs' || location.pathname.startsWith('/tv')) ? "nav-link active" : "nav-link"}>
                        <li>Tvs</li>
                    </NavLink>
                    <NavLink to='/pagespeakers' className={() => 
                      (location.pathname === '/pagespeakers' || location.pathname.startsWith('/speaker')) ? "nav-link active" : "nav-link"}>
                        <li>Speakers</li>
                    </NavLink>
                    <NavLink to='/pagefridges' className={() => 
                      (location.pathname === '/pagefridges' || location.pathname.startsWith('/fridge')) ? "nav-link active" : "nav-link"}>
                         <li>Fridges</li>
                    </NavLink>
                    <NavLink to='/pagebooks' className={() => 
                      (location.pathname === '/pagebooks' || location.pathname.startsWith('/book')) ? "nav-link active" : "nav-link"}>
                        <li>Books</li>
                    </NavLink>
                    


                </ul>
            </div>

        </>
    )
}

export default Navbar
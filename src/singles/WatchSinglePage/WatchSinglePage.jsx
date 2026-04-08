import React, { useState } from 'react'
import './WatchSinglePage.css'
import { useParams } from 'react-router-dom'
import { watchData } from '../../stores/data/watch'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const WatchSinglePage = () => {
   const [added, setAdded] = useState(false);

   const { id } = useParams();
   const { CartItems, addToCart } = useCart();
   const product = watchData.find((item) => item.id === id);
   return (
      <>
         <Navbar />
         <div className="watchPageSection">
            <div className="watchImg">
               <img src={product.image} alt="" />
            </div>
            <div className="watchDetails">
               <div className="watchCompany">
                  <h2>Company:- {product.brand}</h2>
               </div>
               <div className="watchModel">
                  <h3>Model:- {product.model}</h3>
               </div>
               <div className="watchPrice">
                  <h2>Price:- ${product.price}</h2>
               </div>
               <div className="watchDesc">
                  <h3>Description:- {product.description}</h3>
               </div>
               <div className="watchBtnSection">
                  <div className="buyBtn">
                     <button>Buy Now</button>
                  </div>
                  <div className="cart-btn">
                     <button className={added ? "added" : ""} onClick={() => { addToCart(product); setAdded(true); }}>{added? "Added to cart": "Add to Cart"}</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default WatchSinglePage
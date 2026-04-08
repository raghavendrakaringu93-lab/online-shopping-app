import React, { useState } from 'react'
import './WatchSinglePage.css'
import { useParams } from 'react-router-dom'
import { watchData } from '../../stores/data/watch'
import { useCart } from '../../stores/context/CartContext'

const WatchSinglePage = () => {
   const [added, setAdded] = useState(false);

   const { id } = useParams();
   const { CartItems, addToCart } = useCart();
   const product = watchData.find((item) => item.id === id);
   return (
      <>
         <div className="watchPageSection">
            <div className="watchImg">
               <img src={product.image} alt="" />
            </div>
            <div className="watchDetails">
               <div className="watchCompany">
                  <h2>Company: {product.brand}</h2>
               </div>
               <div className="watchModel">
                  <p>Model: {product.model}</p>
               </div>
               <div className="watchPrice">
                  <h3>Price: ${product.price}</h3>
               </div>
               <div className="watchDesc">
                  <p>Description:- {product.description}</p>
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
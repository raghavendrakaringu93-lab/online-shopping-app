import React, { useState } from 'react'
import './WomenSinglePage.css'
import { useParams } from 'react-router-dom'
import { womanData } from '../../stores/data/woman'
import { useCart } from '../../stores/context/CartContext'

const WomenSinglePage = () => {
   const [added, setAdded] = useState(false);
   const { id } = useParams();
   const { CartItems, addToCart } = useCart();
   const product = womanData.find((item) => item.id === id);
   return (
      <>
         <div className="womenPageSection">
            <div className="womenPageImg">
               <img src={product.image} alt="" />
            </div>
            <div className="womenPageDetails">
               <div className="womenPageCompany">
                  <h2>Company: {product.brand}</h2>
               </div>
               <div className="womenPageModel">
                  <p>Model: {product.model}</p>
               </div>
               <div className="womenPagePrice">
                  <h3>Price: ${product.price}</h3>
               </div>
               <div className="womenPageDesc">
                  <p>Description: {product.description}</p>
               </div>
               <div className="womenBtnSection">
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

export default WomenSinglePage
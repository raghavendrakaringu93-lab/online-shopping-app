import React, { useState } from 'react'
import './WomenSinglePage.css'
import { useParams } from 'react-router-dom'
import { womanData } from '../../stores/data/woman'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const WomenSinglePage = () => {
   const [added, setAdded] = useState(false);
   const { id } = useParams();
   const { CartItems, addToCart } = useCart();
   const product = womanData.find((item) => item.id === id);
   return (
      <>
         <Navbar />
         <div className="womenPageSection">
            <div className="womenPageImg">
               <img src={product.image} alt="" />
            </div>
            <div className="womenPageDetails">
               <div className="womenPageCompany">
                  <h2>Company:- {product.brand}</h2>
               </div>
               <div className="womenPageModel">
                  <h3>Model:- {product.model}</h3>
               </div>
               <div className="womenPagePrice">
                  <h2>Price:- ${product.price}</h2>
               </div>
               <div className="womenPageDesc">
                  <h3>Description:- {product.description}</h3>
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
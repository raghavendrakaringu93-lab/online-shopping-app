import React, { useState } from 'react'
import './MensSinglePage.css'
import { useParams } from 'react-router-dom'
import { menData } from '../../stores/data/men'
import { useCart } from '../../stores/context/CartContext'


const MensSinglePage = () => {
   const [added, setAdded] = useState(false);
   const { id } = useParams();
   const { CartItems, addToCart } = useCart();

   const product = menData.find((item) => item.id === id);

   return (
      <>
         <div className="menPageSection">
            <div className="menPageImg">
               <img src={product.image} alt="" />
            </div>
            <div className="menPageDetails">
               <div className="menPageCompany">
                  <h2>Brand {product.brand}</h2>
               </div>
               <div className="menPageModel">
                  <p>Model: {product.model}</p>
               </div>
               <div className="menPagePrice">
                  <h3>Price: ${product.price}</h3>
               </div>
               <div className="menPageDesc">
                  <p>Description: {product.description}</p>
               </div>
               <div className="menBtnSection">
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

export default MensSinglePage
import React, { useState } from 'react'
import './MensSinglePage.css'
import { useParams } from 'react-router-dom'
import { menData } from '../../stores/data/men'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'


const MensSinglePage = () => {
   const [added, setAdded] = useState(false);
   const { id } = useParams();
   const { CartItems, addToCart } = useCart();

   const product = menData.find((item) => item.id === id);

   return (
      <>
         <Navbar />
         <div className="menPageSection">
            <div className="menPageImg">
               <img src={product.image} alt="" />
            </div>
            <div className="menPageDetails">
               <div className="menPageCompany">
                  <h2>Company:- {product.brand}</h2>
               </div>
               <div className="menPageModel">
                  <h3>Model:- {product.model}</h3>
               </div>
               <div className="menPagePrice">
                  <h2>Price:- ${product.price}</h2>
               </div>
               <div className="menPageDesc">
                  <h3>Description:- {product.description}</h3>
               </div>
               <div className="menBtnSection">
                  <div className="buyBtn">
                     <button>Buy Now</button>
                  </div>
                  <div className="cart-btn">
                     <button className={added ? "added" : ""} onClick={() => { addToCart(product); setAdded(true); }}>{added? "Added": "Add to Cart"}</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default MensSinglePage
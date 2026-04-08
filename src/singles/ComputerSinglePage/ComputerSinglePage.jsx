import React, { useState } from 'react'
import './ComputerSinglePage.css'
import { useParams } from 'react-router-dom'
import { computerData } from '../../stores/data/computers'
import { useCart } from '../../stores/context/CartContext'

const ComputerSinglePage = () => {

   const [added, setAdded] = useState(false);

   const { id } = useParams();

   const { CartItems, addToCart } = useCart();
   const product = computerData.find((item) => item.id === id);

   

   return (
      <>
         <div className="compSection" key={product.id}>
            <div className="compImg">
               <img src={product.image} alt="" />
            </div>
            <div className="compDetails">
               <div className="compCompany">
                  <h2>Company: {product.company}</h2>
               </div>
               <div className="compModel">
                  <p>Model: {product.model}</p>
               </div>
               <div className="compPrice">
                  <h3>Price: ${product.price}</h3>
               </div>
               <div className="compDesc">
                  <p>Description: {product.description}</p>
               </div>
               <div className="compBtnSection">
                  <div className="buyBtn">
                     <button>Buy Now</button>
                  </div>
                  <div className="cart-btn">
                     <button className={added ? "added" : ""} onClick={() => { addToCart(product); setAdded(true); }}>{added ? "Added to cart" : "Add to Cart"}</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default ComputerSinglePage
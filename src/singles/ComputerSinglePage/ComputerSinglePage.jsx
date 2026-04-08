import React, { useState } from 'react'
import './ComputerSinglePage.css'
import { useParams } from 'react-router-dom'
import { computerData } from '../../stores/data/computers'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const ComputerSinglePage = () => {

   const [added, setAdded] = useState(false);

   const { id } = useParams();

   const { CartItems, addToCart } = useCart();
   const product = computerData.find((item) => item.id === id);

   

   return (
      <>
         <Navbar />
         <div className="compSection" key={product.id}>
            <div className="compImg">
               <img src={product.image} alt="" />
            </div>
            <div className="compDetails">
               <div className="compCompany">
                  <h2>Company:- {product.company}</h2>
               </div>
               <div className="compModel">
                  <h3>Model:- {product.model}</h3>
               </div>
               <div className="compPrice">
                  <h2>Price:- ${product.price}</h2>
               </div>
               <div className="compDesc">
                  <h3>Description:- {product.description}</h3>
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
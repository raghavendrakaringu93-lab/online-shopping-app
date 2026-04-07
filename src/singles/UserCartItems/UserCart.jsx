import React from 'react'
import './UserCart.css'
import { useCart } from '../../stores/context/CartContext'
import Navbar from '../../stores/components/navbar/Navbar';

const UserCart = () => {
    const {cartItems, removeFromCart} = useCart();

  return (
    <>
      <Navbar/>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="emptyCart">
            <h2>Your cart is empty</h2>
            <p>Add some items to get started!</p>
          </div>
        ) : (
          cartItems.map((item)=>{
              const {image, product, model, price, id} = item;
              return (
                 <div className="cartSection" key={id}>
                   <div className="cartImg">
                      <img src={image} alt=""/>
                   </div>
                   <div className="cartDetails">
                      <h3> {product}</h3>
                      <h3>{model}</h3>
                      <h2>$ {price}</h2>
                      
                   </div>
                   <div className="removeItemBtn">
                       <button className="removeBtn" onClick={() => removeFromCart(id)}>Remove</button>
                   </div>
                 </div>
              )
          })
        )}
      </div>
    </>
  )
}

export default UserCart
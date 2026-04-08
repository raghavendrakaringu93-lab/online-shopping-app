import React, { useState } from 'react'
import './FurnitureSinglePage.css'
import { useParams } from 'react-router-dom'
import { furnitureData } from '../../stores/data/furniture'
import { useCart } from '../../stores/context/CartContext'

const FurnitureSinglePage = () => {
    const [added, setAdded] = useState(false);
    const {id} = useParams();
    const {CartItems, addToCart} = useCart();
    const product = furnitureData.find((item)=>item.id === id);
    return (
        <>
            <div className="furPageSection">
                <div className="furPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="furPageDetails">
                    <div className="furPageCompany">
                        <h2>Company: {product.brand}</h2>
                    </div>
                    <div className="furPageModel">
                        <p>Model: {product.model}</p>
                    </div>
                    <div className="furPagePrice">
                        <h3>Price:- ${product.price}</h3>
                    </div>
                    <div className="furPageDesc">
                        <p>Description:- {product.description}</p>
                    </div>
                    <div className="furBtnSection">
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

export default FurnitureSinglePage
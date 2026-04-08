import React, { useState } from 'react'
import './FridgeSinglePage.css'
import { useParams } from 'react-router-dom'
import { fridgeData } from '../../stores/data/fridge'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'


const FridgeSinglePage = () => {
    const [added, setAdded] = useState(false);
    const { id } = useParams();
    const {CartItems, addToCart} = useCart();
    const product = fridgeData.find((item) => item.id === id);
    return (
        <>
            <Navbar />
            <div className="fridgePageSection">
                <div className="fridgePageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="fridgePageDetails">
                    <div className="fridgePageCompany">
                        <h2>Brand:- {product.brand}</h2>
                    </div>
                    <div className="fridgePageModel">
                        <h3>Model:- {product.model}</h3>
                    </div>
                    <div className="fridgePagePrice">
                        <h2>Price:- ${product.price}</h2>
                    </div>
                    <div className="fridgePageDesc">
                        <h3>Description:- {product.description}</h3>
                    </div>
                    <div className="fridgeBtnSection">
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

export default FridgeSinglePage
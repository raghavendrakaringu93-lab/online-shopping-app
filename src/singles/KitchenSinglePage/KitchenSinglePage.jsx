import React, { useState } from 'react'
import './KitchenSinglePage.css'
import { useParams } from 'react-router-dom'
import { kitchenData } from '../../stores/data/kitchen'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const KitchenSinglePage = () => {
    const [added, setAdded] = useState(false);
    const { id } = useParams();
    const {CartItems, addToCart} = useCart();
    const product = kitchenData.find((item) => item.id === id);
    return (
        <>
            <div className="kitchPageSection">
                <div className="kitchPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="kitchPageDetails">
                    <div className="kitchPageCompany">
                        <h2>Brand: {product.brand}</h2>
                    </div>
                    <div className="kitchPageModel">
                        <p>Model: {product.model}</p>
                    </div>
                    <div className="kitchPagePrice">
                        <h3>Price: ${product.price}</h3>
                    </div>
                    <div className="kitchPageDesc">
                        <p>Description: {product.description}</p>
                    </div>
                    <div className="kitchBtnSection">
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

export default KitchenSinglePage
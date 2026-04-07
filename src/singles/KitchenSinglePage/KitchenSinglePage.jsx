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
            <Navbar />
            <div className="kitchPageSection">
                <div className="kitchPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="kitchPageDetails">
                    <div className="kitchPageCompany">
                        <h2>Company:- {product.company}</h2>
                    </div>
                    <div className="kitchPageModel">
                        <h3>Model:- {product.model}</h3>
                    </div>
                    <div className="kitchPagePrice">
                        <h2>Price:- ${product.price}</h2>
                    </div>
                    <div className="kitchPageDesc">
                        <h3>Description:- {product.description}</h3>
                    </div>
                    <div className="kitchBtnSection">
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

export default KitchenSinglePage
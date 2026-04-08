import React, { useState } from 'react'
import './TvSinglePage.css'
import { useParams } from 'react-router-dom'
import { tvData } from '../../stores/data/tv'
import { useCart } from '../../stores/context/CartContext'

const TvSinglePage = () => {
    const [added, setAdded] = useState(false);

    const { id } = useParams();
    const {CartItems, addToCart} = useCart();
    const product = tvData.find((item) => item.id === id);
    return (
        <>
            <div className="tvPageSection">
                <div className="tvPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="tvPageDetails">
                    <div className="tvPageCompany">
                        <h2>Brand: {product.brand}</h2>
                    </div>
                    <div className="tvPageModel">
                        <p>Model: {product.model}</p>
                    </div>
                    <div className="tvPagePrice">
                        <h3>Price:- ${product.price}</h3>
                    </div>
                    <div className="tvPageDesc">
                        <p>Description:- {product.description}</p>
                    </div>
                    <div className="tvBtnSection">
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

export default TvSinglePage
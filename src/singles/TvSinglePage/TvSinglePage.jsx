import React, { useState } from 'react'
import './TvSinglePage.css'
import { useParams } from 'react-router-dom'
import { tvData } from '../../stores/data/tv'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const TvSinglePage = () => {
    const [added, setAdded] = useState(false);

    const { id } = useParams();
    const {CartItems, addToCart} = useCart();
    const product = tvData.find((item) => item.id === id);
    return (
        <>
            <Navbar />
            <div className="tvPageSection">
                <div className="tvPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="tvPageDetails">
                    <div className="tvPageCompany">
                        <h2>Brand:- {product.brand}</h2>
                    </div>
                    <div className="tvPageModel">
                        <h3>Model:- {product.model}</h3>
                    </div>
                    <div className="tvPagePrice">
                        <h2>Price:- ${product.price}</h2>
                    </div>
                    <div className="tvPageDesc">
                        <h3>Description:- {product.description}</h3>
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
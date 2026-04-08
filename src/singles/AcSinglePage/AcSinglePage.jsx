import React, { useState } from 'react'
import './AcSinglePage.css'
import { useParams } from 'react-router-dom'
import { acData } from '../../stores/data/ac'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const AcSinglePage = () => {
    const [added, setAdded] = useState(false);

    const { id } = useParams();

    const { CartItems, addToCart } = useCart();

    const product = acData.find((item) => item.id === id);
    return (
        <>
            <Navbar />
            <div className="acPageSection">
                <div className="acPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="acPageDetails">
                    <div className="acPageCompany">
                        <h2>Company:- {product.company}</h2>
                    </div>
                    <div className="acPageModel">
                        <h3>Model:- {product.model}</h3>
                    </div>
                    <div className="acPagePrice">
                        <h2>Price:- ${product.price}</h2>
                    </div>
                    <div className="acPageDesc">
                        <h3>Description:- {product.description}</h3>
                    </div>
                    <div className="acBtnSection">
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

export default AcSinglePage
import React, {useState} from 'react'
import './SpeakerSinglePage.css'
import { useParams } from 'react-router-dom'
import { speakerData } from '../../stores/data/speaker'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const SpeakerSinglePage = () => {
    const [added, setAdded] = useState(false);
    const { id } = useParams();
    const {CartItems, addToCart} = useCart();
    const product = speakerData.find((item) => item.id === id);

    if (!product) {
        return (
            <>
                <Navbar />
                <div style={{ padding: 20 }}>
                    <h2>Product not found</h2>
                    <p>The requested speaker does not exist.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="speakPageSection">
                <div className="speakPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="speakPageDetails">
                    <div className="speakPageCompany">
                        <h2>Brand:- {product.brand}</h2>
                    </div>
                    <div className="speakPageModel">
                        <h3>Model:- {product.model}</h3>
                    </div>
                    <div className="speakPagePrice">
                        <h2>Price:- ${product.price}</h2>
                    </div>
                    <div className="speakPageDesc">
                        <h3>Description:- {product.description}</h3>
                    </div>
                    <div className="speakBtnSection">
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

export default SpeakerSinglePage
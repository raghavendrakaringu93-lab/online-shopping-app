import React, { useState} from 'react'
import { mobileData } from '../../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import './MobileSinglePage.css'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'


const MobileSinglePage = () => {

    const [added, setAdded] = useState(false);

    const { id } = useParams()
    const {CartItems, addToCart} = useCart();

    const product = mobileData.find((item) => item.id === id);
    
    

    
    return (
        <>
            <Navbar/>
            <div className='ind-section' key={product.id}>
                <div className="ind-image">
                    <img src={product.image} alt="" />
                </div>
                <div className="ind-details">
                    <div className="ind-company">
                        <h2>Company:- {product.company}</h2>
                    </div>
                    <div className="ind-model">
                        <h3>Model:- {product.model}</h3>
                    </div>
                    <div className="ind-price">
                        <h2>Price:- ${product.price}</h2>
                    </div>
                    <div className="ind-desc">
                        <h3>Description:- {product.description}</h3>
                    </div>
                    <div className="buttonSection">
                        <div className="buy-btn">
                            <button>Buy Now</button>
                        </div>
                        <div className="cart-btn">
                            <button className={added? "added": ""} onClick={()=>{addToCart(product); setAdded(true);}}>{added? "Added to cart": "Add to Cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileSinglePage
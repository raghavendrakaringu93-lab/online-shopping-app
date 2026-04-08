import React, { useState } from 'react'
import './BookSinglePage.css'
import { useParams } from 'react-router-dom'
import { booksData } from '../../stores/data/books'
import Navbar from '../../stores/components/navbar/Navbar'
import { useCart } from '../../stores/context/CartContext'

const BookSinglePage = () => {
    const [added, setAdded] = useState(false);

    const { id } = useParams();
    const {CartItems, addToCart} = useCart();
    const product = booksData.find((item) => item.id === id);
    return (
        <>
            <Navbar />
            <div className="bookPageSection">
                <div className="bookPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="bookPageDetails">
                    <div className="bookPageCompany">
                        <h2>Author:- {product.author}</h2>
                    </div>
                    <div className="bookPageModel">
                        <h3>Title:- {product.title}</h3>
                    </div>
                    <div className="bookPagePrice">
                        <h2>Price:- ${product.price}</h2>
                    </div>
                    <div className="bookPageDesc">
                        <h3>Description:- {product.description}</h3>
                    </div>
                    <div className="bookBtnSection">
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

export default BookSinglePage
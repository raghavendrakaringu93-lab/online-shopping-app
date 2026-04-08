import React, { useState } from 'react'
import './BookSinglePage.css'
import { useParams } from 'react-router-dom'
import { booksData } from '../../stores/data/books'
import { useCart } from '../../stores/context/CartContext'

const BookSinglePage = () => {
    const [added, setAdded] = useState(false);

    const { id } = useParams();
    const {CartItems, addToCart} = useCart();
    const product = booksData.find((item) => item.id === id);
    return (
        <>
            <div className="bookPageSection">
                <div className="bookPageImg">
                    <img src={product.image} alt="" />
                </div>
                <div className="bookPageDetails">
                    <div className="bookPageCompany">
                        <h2>Author: {product.author}</h2>
                    </div>
                    <div className="bookPageModel">
                        <p>Title: {product.title}</p>
                    </div>
                    <div className="bookPagePrice">
                        <h2>Price: ${product.price}</h2>
                    </div>
                    <div className="bookPageDesc">
                        <p>Description: {product.description}</p>
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
import React from 'react'
import './BooksPage.css'
import { booksData } from "../../data/books"
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const BooksPage = () => {
    return (
        <>
            <Navbar />
            <div className='booksSection'>
                {
                    booksData.map((item) => {
                        const { id, image, title, author } = item;
                        return (
                            <div key={id} className="books-card">
                                <Link to={`/book/${item.id}`} >
                                   <div className="books-Img">
                                    <img src={image} alt="" />
                                   </div>
                                </Link>
                                <div className="books-Model">
                                    <strong>{title}</strong>
                                    <p>{author}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BooksPage
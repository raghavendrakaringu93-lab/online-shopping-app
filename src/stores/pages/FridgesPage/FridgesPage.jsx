import React from 'react'
import './FridgesPage.css'
import { fridgeData } from '../../data/fridge'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'


const FridgesPage = () => {
    return (
        <>
            <Navbar />
            <div className='fridgeSection'>
                {
                    fridgeData.map((item) => {
                        const { id, image, brand, model } = item;
                        return (
                            <div key={id} className="fridge-card">
                                <Link to={`/fridge/${item.id}`} >
                                   <div className="fridge-Img">
                                    <img src={image} alt="" />
                                   </div>
                                </Link>
                                <div className="fridge-Model">
                                    <strong>{brand}</strong>
                                    <p>{model}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FridgesPage
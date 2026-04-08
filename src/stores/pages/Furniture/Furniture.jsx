import React from 'react'
import './Furniture.css'
import {furnitureData} from '../../data/furniture'
import { Link } from 'react-router-dom'

const Furniture = () => {
    return (
        <>
            <div className='furnitureSection'>
                {
                    furnitureData.map((item) => {
                        const { id, image, brand, model } = item;
                        return (
                            <div className="furniture-card" key={id}>
                                <Link to={`/furniture/${item.id}`} >
                                   <div className="furniture-Img">
                                    <img src={image} alt="" />
                                   </div>
                                </Link>
                                <div className="furniture-Model">
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

export default Furniture
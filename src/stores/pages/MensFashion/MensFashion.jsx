import React from 'react'
import './MensFashion.css'
import { menData } from '../../data/men'
import { Link } from 'react-router-dom'

const MensFashion = () => {
    return (
        <>
    
            <div className='menSection'>
                {
                    menData.map((item) => {
                        const { id, image, brand, model } = item;
                        return (
                            <div className="men-card" key={id}>
                                <Link to={`/men/${item.id}`}>
                                   <div className="men-Img">
                                    <img src={image} alt="" />
                                   </div>
                                </Link>
                                <div className="men-Model">
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

export default MensFashion
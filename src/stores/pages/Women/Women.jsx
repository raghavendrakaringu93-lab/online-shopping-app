import React from 'react'
import './Women.css'
import { womanData } from '../../data/woman'
import { Link } from 'react-router-dom'

const Women = () => {
    return (
        <>
    
            <div className='womenSection'>
                {
                    womanData.map((item) => {
                        const { id, image, brand, model } = item;
                        return (
                            <div className="women-card" key={id}>
                                <Link to={`/women/${item.id}`}>
                                   <div className="women-Img">
                                    <img src={image} alt="" />
                                  </div>
                                </Link>
                                <div className="women-Model">
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

export default Women
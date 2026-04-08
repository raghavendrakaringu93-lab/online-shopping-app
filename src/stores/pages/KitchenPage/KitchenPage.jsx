import React from 'react'
import './KitchenPage.css'
import { kitchenData } from '../../data/kitchen'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
  return (
    <>
        
            <div className='kitchenSection'>
                {
                    kitchenData.map((item) => {
                        const { id, image, type, brand } = item;
                        return (
                            <div className="kitchen-card" key={id}>
                                <Link to={`/kitchen/${item.id}`}>
                                   <div className="kitchen-Img">
                                    <img src={image} alt="" />
                                  </div>
                                </Link>
                                <div className="kitchen-Model">
                                    <strong>{type}</strong>
                                    <p>{brand}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
  )
}

export default KitchenPage
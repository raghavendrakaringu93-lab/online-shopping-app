import React from 'react'
import './KitchenPage.css'
import { kitchenData } from '../../data/kitchen'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
  return (
    <>
            <Navbar />
            <div className='kitchenSection'>
                {
                    kitchenData.map((item) => {
                        const { id, image, brand, model } = item;
                        return (
                            <div className="kitchen-card" key={id}>
                                <Link to={`/kitchen/${item.id}`}>
                                   <div className="kitchen-Img">
                                    <img src={image} alt="" />
                                  </div>
                                </Link>
                                <div className="kitchen-Model">
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

export default KitchenPage
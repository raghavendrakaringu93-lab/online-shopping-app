import React from 'react'
import './TvsPage.css'
import {tvData} from '../../data/tv'
import { Link } from 'react-router-dom'

const TvsPage = () => {
  return (
        <>
            <div className='tvSection'>
                {
                    Array.isArray(tvData) && tvData.map((item) => {
                        const { id, image, brand, model } = item;
                        return (
                            <div className="tv-card" key={id}>
                                <Link to={`/tv/${item.id}`} >
                                   <div className="tv-Img">
                                    <img src={image} alt="" />
                                  </div>
                                </Link>
                                <div className="tv-Model">
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

export default TvsPage
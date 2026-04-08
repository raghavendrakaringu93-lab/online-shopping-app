import React from 'react'
import { fridgeData } from '../../data/fridge'

const Fridges = () => {
    const fiveImages = fridgeData.slice(0, 5);
  return (
    <>
      <h2>Fridges</h2>
      <div className='proSection'>
         {
            fiveImages.map((item)=>{
                const {image, id, brand} = item;
                return(
                  <div className="imgBox" key={id}>
                    <img className='proImg' src={image} alt=""/>
                    <p>{brand}</p>
                  </div>
                )
            })
         }
      </div>
    </>
  )
}

export default Fridges
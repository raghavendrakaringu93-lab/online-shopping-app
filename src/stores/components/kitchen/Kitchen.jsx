import React from 'react'
import {kitchenData} from '../../data/kitchen'

const Furniture = () => {
    const fiveImages = kitchenData.slice(0, 5);
  return (
    <>
      <h2>Kitchen items...</h2>
      <div className='proSection'>
        {
          fiveImages.map((item) => {
            const { image, brand } = item;
            return (
              <div className='imgBox'>
                <img className='proImg' src={image} alt="" />
                <p>{brand}</p>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default Furniture
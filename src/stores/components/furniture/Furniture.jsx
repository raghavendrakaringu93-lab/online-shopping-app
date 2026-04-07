import React from 'react'
import {furnitureData} from '../../data/furniture'

const Furniture = () => {
    const fiveImages = furnitureData.slice(0, 5);
  return (
    <>
      <h2>Furniture</h2>
      <div className='proSection'>
        {
          fiveImages.map((item) => {
            const { image, id } = item;
            return (
              <div className='imgBox' key={id}>
                <img className='proImg' src={image} alt="" />
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default Furniture
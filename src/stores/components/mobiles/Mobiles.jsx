import React from 'react'
import './Mobiles.css'
import { mobileData } from "../../data/mobiles"


const Mobiles = () => {

  const fiveImages = mobileData.slice(0, 5);
  return (
    <>
      <h2>Mobiles</h2>
      <div className='proSection'>
        {
          fiveImages.map((item) => {
            const { image, id, company } = item;
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

export default Mobiles;
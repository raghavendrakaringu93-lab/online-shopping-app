import React from 'react'
import { acData } from '../../data/ac'

const Ac = () => {
    const fiveImages = acData.slice(0, 5);
  return (
    <>
      <h2>ACs</h2>
      <div className='proSection'>
         {
            fiveImages.map((item)=>{
                const {image, id} = item;
                return(
                  <div className="imgBox" key={id}>
                    <img className='proImg' src={image} alt=""/>
                  </div>
                )
            })
         }
      </div>
    </>
  )
}

export default Ac
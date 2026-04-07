import React from 'react'
import {tvData} from "../../data/tv"

const Tv = () => {
    const fiveImage = tvData.slice(0,5);
  return (
    <>
    <h2>TVs</h2>
      <div className='proSection'>
         {
            fiveImage.map((item)=>{
                const {image, id} = item;
                return(
                  <div className="imgBox" key={id}>
                    <img className='proImg' src={image} alt="" />
                  </div>
                )
            })
         }
      </div>

    </>
  )
}

export default Tv
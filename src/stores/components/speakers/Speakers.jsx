import React from 'react'
import './Speakers.css'
import { speakerData } from '../../data/speaker'

const Speakers = () => {
    const fiveImages = speakerData.slice(0,5);
  return (
    <>
      <h2>Speakers</h2>
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

export default Speakers
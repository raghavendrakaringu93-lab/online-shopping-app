import React from 'react'
import './Computers.css'
import { computerData } from '../../data/computers'

const Computers = () => {
    const ExImages = computerData.slice(0, 5);
    return (
        <>
            <h2>Computers</h2>
            <div className='proSection'>
                {
                    ExImages.map((item) => {
                        const { image, id } = item
                        return (
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

export default Computers
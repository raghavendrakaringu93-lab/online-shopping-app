import React from 'react'
import "./SpeakersPage.css"
import { speakerData } from '../../data/speaker'
import { Link } from 'react-router-dom'

const SpeakersPage = () => {
    return (
        <>
            <div className='speakerSection'>
                {
                    speakerData.map((item) => {
                        const { id, image, brand, model } = item;
                        return (
                            <div key={id} className="speaker-card">
                                <Link to={`/speaker/${item.id}`}>
                                   <div className="speaker-Img">
                                    <img src={image} alt="" />
                                   </div>
                                </Link>
                                <div className="speaker-Model">
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

export default SpeakersPage
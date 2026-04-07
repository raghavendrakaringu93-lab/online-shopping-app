import React from 'react'
import './AcPage.css'
import { acData } from '../../data/ac'
import Navbar from '../../components/navbar/Navbar'
import { NavLink } from 'react-router-dom'

const AcPage = () => {
    return (
        <>
            <Navbar />
            <div className='acSection'>
                {
                    acData.map((item) => {
                        const { id, image, company, model } = item;
                        return (
                            <div className="ac-card" key={id}>
                                <NavLink to= {`/ac/${item.id}`} className={({ isActive})=> 
                                    isActive ?  "nav-link active": "nav-link"}>
                                 <div className="ac-Img">
                                    <img src={image} alt="" />
                                 </div>
                                </NavLink>
                                <div className="ac-Model">
                                    <strong>{company}</strong>
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

export default AcPage
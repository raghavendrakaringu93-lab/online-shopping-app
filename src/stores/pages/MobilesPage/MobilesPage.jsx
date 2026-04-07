import React from 'react'
import { mobileData } from '../../data/mobiles'
import './MobilesPage.css'
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom'

function MobilesPage() {
    return (
        <>
            <Navbar/>
            <div className="mobileSection">
                {
                    mobileData.map((item) => {
                        const {id, image, company, model } = item;
                        return (
                            <div key={id} className='mobile-Card'>
                                <Link to={`/mobile/${item.id}`}  >
                                  <div className="mobile-Img">
                                    <img src={image} alt="" />
                                </div>
                                </Link>
                                <div className="mobile-Model">
                                    <span>{company}</span>
                                    <span>{model}</span>
                                </div>
                            </div>



                        )
                    })
                }
            </div>
        </>
    )
}

export default MobilesPage
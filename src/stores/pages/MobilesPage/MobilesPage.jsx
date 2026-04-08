import React from 'react'
import { mobileData } from '../../data/mobiles'
import './MobilesPage.css'

import { Link } from 'react-router-dom'

function MobilesPage() {
    return (
        <>
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
                                    <strong>{company} </strong>
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

export default MobilesPage
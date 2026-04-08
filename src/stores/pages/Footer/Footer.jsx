import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='FooterSection'>
                <div className="footerTitle">
                    <h2>OnLine.</h2>
                </div>
                <div className="footerDetailsSection">
                    <div className="footerAbout">
                        <h4>ABOUT</h4>
                        <p>About OnLine</p>
                        <p>Contact OnLine</p>
                        <p>Explore OnLine</p>
                        <p>Privacy&terms</p>
                    </div>
                    <div className="footerMagazine">
                        <h4>OnLine MAGAZINE</h4>
                        <p>Subscribe to OnLine</p>
                        <p>Gift Subcriptions</p>
                        <p>Order Back Issues</p>
                        <p>Subscription Help</p>
                    </div>
                    <div className="footerProf">
                        <h4>PROFESSIONALS</h4>
                        <p>ShowCase Your Work</p>
                        <p>Promote Your Work</p>
                        <p>Become a OnLinePro</p>
                    </div>
                    <div className="footerMerchants">
                        <h4>MERCHANTS</h4>
                        <p>Sell products on OnLine.</p>
                        <p>Advertise Products</p>
                        <p>Shop on OnLine.</p>
                    </div>
                </div>
                <hr />
                <div className="socialMediaSection">
                    <h4>FOLLOW US ON SOCIAL MEDIA</h4>
                    <div className="socialIcons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Footer
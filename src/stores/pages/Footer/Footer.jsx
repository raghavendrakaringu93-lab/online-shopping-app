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
                <h3>ABOUT</h3>
                <h4>About OnLine</h4>
                <h4>Contact OnLine</h4>
                <h4>Explore OnLine</h4>
                <h4>Privacy&terms</h4>
            </div>
            <div className="footerMagazine">
                <h3>OnLine MAGAZINE</h3>
                <h4>Subscribe to OnLine</h4>
                <h4>Gift Subcriptions</h4>
                <h4>Order Back Issues</h4>
                <h4>Subscription Help</h4>
            </div>
            <div className="footerProf">
                <h3>PROFESSIONALS</h3>
                <h4>ShowCase Your Work</h4>
                <h4>Promote Your Work</h4>
                <h4>Become a OnLinePro</h4>
            </div>
            <div className="footerMerchants">
                <h3>MERCHANTS</h3>
                <h4>Sell products on OnLine.</h4>
                <h4>Advertise Products</h4>
                <h4>Shop on OnLine.</h4>
            </div>
        </div>
        <hr/>
        <div className="socialMediaSection">
            
                <h3>FaceBook:- OnLine.com</h3>
            <h3>Insta:- OnLine_official</h3>
            <h3>Youtude:- OnLine store</h3>
            
        </div>
      </div>
    
    </>
  )
}

export default Footer
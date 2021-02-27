import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <div className="footer-col-head">Get to Know Us</div>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Cares</li>
              <li>Gift a smile</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Connect with us</div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Make Money with Us</div>
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Let us help you</div>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Amazon Assistant Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="footer-line">
          <img
            className="footer-line-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
          <span className="footer-line-message">
            Amazon clone
          </span>
        </div>
      </div>
    )
}

export default Footer

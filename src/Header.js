import React from 'react';
import './Header.css';
import {HiOutlineLocationMarker} from "react-icons/hi";
import {CgShoppingCart} from "react-icons/cg";
import {useStateValue} from './Provider';
import {Link} from 'react-router-dom';


function Header() {
    const [{ cart }, dispatch] = useStateValue();
    return (
        <div>
        <div className="header">
            <img className="header_logo" src="data:image/png;base64,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"/>
            <div className='header-location'>
                <div className='header-location-line-1'>Deliver to Elizabeth</div>
                <div >
                <HiOutlineLocationMarker/>
                    <span className='header-location-line-2'>Goa 403801</span>
                    
                </div>
            </div>
            <div className='nav-search-bar'>
                <input type="text" className='nav-search-input'/>
                 <div className='nav-search-btn'>
                    < i className="fa fa-search"/>
                </div>
            
            </div>
            <img className='nav-flag' src="data:image/png;base64,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"/>
            <div className='header-account-list'>
                <div className='header-location-line-1'>Hello, Elizabeth</div>
                <div className='header-location-line-2'>Account & Lists</div>
            </div>
            <div className='header-location'>
                <div className='header-location-line-1'>Returns</div>
                <div className='header-location-line-2'>& Orders</div>
            </div>
            <Link to="/checkout">
            <div className='header-cart'>
                <span className='header-cart-number'> {cart.length}</span>
            <CgShoppingCart style={{color : 'white',fontSize:'30px'}}/>
            </div>
            <div className='header-location-line-2'>Cart</div>
            </Link>
            
        </div>
        <div className='nav-search-bottom'>
                <input type="text" className='nav-search-input'/>
                 <div className='nav-search-btn'>
                    < i className="fa fa-search"/>
                </div>
        </div>
        
        </div>
    )
}

export default Header;

import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";


function Header(){
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }
    
    return(
        <div className="header">
            <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            </Link>
            <div className="header_search">
                <input className="header_searchbox" type="text">

                </input>
                <SearchIcon className="header_search_icon"/>
            </div>
            <div className="header_nav">
            <Link to="/login">
                <div onClick={handleAuthenticaton} className="header_option">
                    <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className="header_option">
                <span className="header_option_one">
                        Returns &
                    </span>
                    <span className="header_option_two">
                        Orders
                    </span>
                </div>
                <div className="header_option">
                <span className="header_option_one">
                       Your
                    </span>
                    <span className="header_option_two">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_option_two header_basket_count">{basket.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;
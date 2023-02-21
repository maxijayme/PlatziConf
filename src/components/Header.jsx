import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from "react-icons/fa";
import AppContext from '../context/AppContext'

import "../styles/components/Header.css";

function Header() {

  const {state} = useContext(AppContext);
  const {cart} = state;
  
  return (
    <header className='Header'>
        <h1 className='Header-title'>
          <Link to="/">
            PlatizConf Merch
          </Link>
        </h1>
        <div className="Header-checkout">
           <Link to='/checkout'> 
            <FaShoppingBasket title="checkout" size="30px"/>
            {cart.length>0 && <div className='Header-alert'>{cart.length}</div> }
           </Link>
        </div>
    </header>
  )
}

export default Header
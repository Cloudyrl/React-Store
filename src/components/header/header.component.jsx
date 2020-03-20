import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo_transparent2.png'

import './header.styles.scss'

const header = () => {
    return (
        <div className="header">
        <Link className='logo-container' to="/">
            <img src={logo} alt="vintage store logo" className="logo"/>
        </Link>
        <div className="global-options">
            <Link className='option' to='/products'>
                HOME
            </Link>
            <Link className='option' to='/about'>
                ABOUT
            </Link>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
        </div>
        <div className="login-cart">
            <Link className='option' to='/about'>
                LOGIN
            </Link>
            <Link className='option' to='/cart'> 
                CART
            </Link>
        </div>
        </div>
    )
}

export default header
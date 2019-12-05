import React from 'react';
import { logo } from './style.js';
import logoImg from '../../assets/images/logo.png';

const Header = () => {
    return(
        <div>
            <img src={logoImg} alt="" style={logo} className='logo'/>
        </div>
    )
}

export default Header;
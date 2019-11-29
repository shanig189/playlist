import React from 'react';
import { logo } from './style.js';
import logoImg from '../../assets/images/logo.png';

const header = () => {
    return(
        <div>
            <img src={logoImg} alt="" style={logo}/>
        </div>
    )
}

export default header;
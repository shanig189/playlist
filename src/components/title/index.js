import React from 'react';
import { titleCtn, title, innerTitle, headphoneCtn, headphone } from './style.js';
import headphoneImg from '../../assets/images/headphone.png';

const Title = () => {
    return(
        <div style={titleCtn} className='titleCtn'>
            <h1 style={title} className='title'>
                your 
                <span style={innerTitle}>
                    playlist.
                </span>
            </h1>
            <div style={headphoneCtn}>
                <img src={headphoneImg} alt="" style={headphone}/>
            </div>
        </div>
    )
}

export default Title;
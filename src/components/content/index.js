import React from 'react';
import { titleCtn, title, innerTitle, headphoneCtn, headphone } from './style.js';
import headphoneImg from '../../assets/images/headphone.png';

const content = () => {
    return(
        <div style={titleCtn}>
            <h1 style={title}>
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

export default content;
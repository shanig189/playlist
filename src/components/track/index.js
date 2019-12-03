import React from 'react';
import trackImg from '../../assets/images/trackImg.gif';
import { trackCtn, trackImage, trackDetails } from './style';

const Track = ({ trackData }) => {
    return(
        <div style={trackCtn}>
            <img src={trackImg} alt="" style={trackImage}/>
            <span style={trackDetails}> 
                {trackData.trackName} | {trackData.artistName}
            </span>
        </div>
    )
}

export default Track;
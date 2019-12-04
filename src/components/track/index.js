import React from 'react';
import { useHistory } from "react-router-dom";
import trackImg from '../../assets/images/trackImg.gif';
import { trackCtn, trackImage, trackDetails } from './style';

const Track = ({ trackData }) => {
    let history = useHistory();

    const handleClick = (trackId) => {
        history.push(`/track/${trackId}`);
    }
    
    return(
        <div style={trackCtn} onClick={() => handleClick(trackData.trackId)}>
            <img src={trackImg} alt="" style={trackImage}/>
            <span style={trackDetails}> 
                {trackData.trackName} | {trackData.artistName}
            </span>
        </div>
    )
}

export default Track;
import React from 'react';
import { useParams } from "react-router-dom";
import trackImg from '../../assets/images/trackImg.gif';
import { trackCtn, trackImage, trackDetails } from './style';

const TrackContent = () => {
    let { trackId } = useParams();

    return(
        <div style={trackCtn}>
            <img src={trackImg} alt="" style={trackImage}/>
            <h1>{trackId}</h1>
            {/* <span style={trackDetails}> 
                {trackData.trackName} | {trackData.artistName}
            </span> */}
        </div>
    )
}

export default TrackContent;
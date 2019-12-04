import React from 'react';
import { useHistory } from "react-router-dom";
import { useGlobalState } from '../../state/useGlobalState';
import trackImg from '../../assets/images/trackImg.gif';
import { trackCtn, trackImage, trackDetails } from './style';
import Actions from '../../helpers/tracksActions';

const Track = ({ trackData }) => {
    const [chosenTrack, setChosenTrack] = useGlobalState('chosenTrack');
    const { getTrackLyrics } = Actions();
    let history = useHistory();

    const handleClick = async() => {
        const trackLyrics = await getTrackLyrics(trackData.trackId);
        trackData.trackLyrics = trackLyrics;
        setChosenTrack(trackData);
        history.push(`/track`);
    }
    
    return(
        <div style={trackCtn} onClick={() => handleClick()}>
            <img src={trackImg} alt="" style={trackImage}/>
            <span style={trackDetails}> 
                {trackData.trackName} | {trackData.artistName}
            </span>
        </div>
    )
}

export default Track;
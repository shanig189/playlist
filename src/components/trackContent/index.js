import React from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import trackImg from '../../assets/images/trackImg.gif';
import { trackDetailsCtn, detail, lyricsCtn, lyrics } from './style';

const TrackContent = () => {
    const [chosenTrack, setChosenTrack] = useGlobalState('chosenTrack');

    return(
        chosenTrack && 
        (<div style={trackDetailsCtn}>
                <span style={detail}> 
                    Track name: {chosenTrack.trackName}
                </span>
                <span style={detail}> 
                    Artist name: {chosenTrack.artistName}
                </span>
                <span style={detail}> 
                    Album name: {chosenTrack.albumName}
                </span>
                <div style={lyricsCtn}>
                    <span style={detail}>Lyrics:</span> 
                    <br/>
                    <div style={lyrics}>
                    {
                        chosenTrack.trackLyrics !=='' ?
                        <span>{chosenTrack.trackLyrics}</span>
                        :
                        <span>No lyrics found.</span>
                    }
                    </div> 
                </div>
        </div>)
    )
}

export default TrackContent;
import React from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { tracksListCtn } from './style';
import AddTracks from '../addTracks';
import Filter from '../filter';
import Track from '../track';

const Tracks = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    
    const getTracksList = tracks.map((track, index) =>
        <Track key={index} 
            trackData={track}
        />
    );
        
    return(
        <div>
            <AddTracks />
            {
                tracks.length > 1 &&
                (<Filter />) 
            }
            <div style={tracksListCtn} className='tracksListCtn'>
                {getTracksList}
            </div>
            <div id="tracksLength" style={{display: 'none'}}>{tracks.length}</div>
        </div>
    )
}

export default Tracks;
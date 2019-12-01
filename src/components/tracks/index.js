import React from 'react';
import { useGlobalState } from '../../store/useGlobalState';
import AddTracks from '../addTracks';
import Filter from '../filter';

const Tracks = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    console.log("tracks", tracks)
    return(
        <div>
            <AddTracks />
            <div style={{marginTop: '5%'}}> 
            {/* //IF TRACKS MORE THAN 2 */}
                <Filter /> 
            </div>
        </div>
    )
}

export default Tracks;
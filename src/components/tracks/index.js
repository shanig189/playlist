import React from 'react';
import AddTracks from '../addTracks';
import Filter from '../filter';

const Tracks = () => {
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
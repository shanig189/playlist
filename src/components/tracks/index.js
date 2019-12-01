import React from 'react';
import Search from '../search';
import Filter from '../filter';

const Tracks = () => {
    return(
        <div>
            <Search />
            <div style={{marginTop: '5%'}}> 
            {/* //IF TRACKS NOT EMPTY */}
                <Filter /> 
            </div>
        </div>
    )
}

export default Tracks;
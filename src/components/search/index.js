import React from 'react';
import { searchCtn, searchInput, getTracksBtn } from './style.js';

const Search = () => {
    return(
        <div style={searchCtn}>
            <input style={searchInput} type='text' placeholder='Track name' />
            <input style={searchInput} type='text' placeholder='Artist name' />
            <button style={getTracksBtn}>
                <span>get your tracks</span>
            </button>
        </div>
    )
}

export default Search;
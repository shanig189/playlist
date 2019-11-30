import React from 'react';
import { searchAndFilterCtn, searchBtn, filterBtn, playlistBtn } from './style.js';

const SearchAndFilter = () => {
    let filterByCurrentValue = 'DEFAULT';
    const handleFilterByChange = (event) => {
        filterByCurrentValue = event.target.value;
    }

    return(
        <div style={searchAndFilterCtn}>
            <input style={searchBtn} type="text" placeholder="Search key" />
            <select style={filterBtn} defaultValue={'DEFAULT'} onChange={handleFilterByChange}>
                <option value="DEFAULT" disabled>Filter by</option>
                <option value="1">Option 2</option>
                <option value="1">Option 3</option>
            </select>
            <button style={playlistBtn}>
                <span>get your playlist</span>
            </button>
        </div>
    )
}

export default SearchAndFilter;
import React from 'react';
import { filterCtn, filterTitle, filterBtn, filterDefaultOption, filterOptionsCtn, filterOption } from './style.js';
import { filterOptionsArr } from '../../utils/enums';

const Filter = () => {
    const filterOptions = filterOptionsArr.map((option, index) =>
        <li key={index} value={option} style={filterOption}>{option}</li>
    );

    return(
        <div style={filterCtn}>
            <span style={filterTitle}>Filter By:</span>
            <div style={filterBtn} className='filterBtn'>
                <span style={filterDefaultOption}>All</span>
            </div>
            <ul style={filterOptionsCtn}>
                {filterOptions}
            </ul>
        </div>
    )
}

export default Filter;
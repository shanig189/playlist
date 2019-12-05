import React, { useState } from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { filterCtn, filterTitle, filterBtn, filterByTxt, filterDefaultOption, filterOptionsCtn, filterOption } from './style.js';
import { filterOptions } from '../../utils/enums';
import Actions from '../../helpers/tracksActions';

const Filter = () => {
    const [sortOption, setSortOption] = useGlobalState('sortOption');
    const [currentFilterOption, setCurrentFilterOption] = useState(sortOption);
    const [isFilterOptionsBoxOpen, setIsFilterOptionsBoxOpen] = useState(false);
    const { sortTracks } = Actions();    

    const toggleFilterOptionsBox = () => {
        setIsFilterOptionsBoxOpen(!isFilterOptionsBoxOpen);
    }

    const handletCurrentFilterOptionChanged = (option) => {
        setCurrentFilterOption(option);
        toggleFilterOptionsBox();
        setSortOption(option);
        sortTracks(option);
    }

    const getFilterOptions = filterOptions.map((option, index) =>
        <li key={index} 
            className='filterOption' 
            value={option} 
            style={filterOption}
            onClick={() => handletCurrentFilterOptionChanged(option)}>
            {option}
        </li>
    );

    return(
        <div style={filterCtn} className='filterCtn'>
            <span style={filterByTxt} className='filterByTxt'>Filter By:</span>
            <div style={filterBtn} className='filterBtn' onClick={toggleFilterOptionsBox}>
                <span style={filterDefaultOption}>{currentFilterOption}</span>
            </div>
            {
                isFilterOptionsBoxOpen && 
                (<ul style={filterOptionsCtn} className='filterOptionsCtn'>
                    {getFilterOptions}
                </ul>)
            }
        </div>
    )
}

export default Filter;
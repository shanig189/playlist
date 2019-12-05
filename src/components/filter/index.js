import React, { useState } from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { filterCtn, filterTitle, filterBtn, filterDefaultOption, filterOptionsCtn, filterOption } from './style.js';
import { filterOptions } from '../../utils/enums';
import Actions from '../../helpers/tracksActions';

const Filter = () => {
    const [sortOption, setSortOption] = useGlobalState('sortOption');
    const filterOptionName = sortOption === 'Default' ?  'Filter by' : sortOption;
    const [currentFilterOption, setCurrentFilterOption] = useState(filterOptionName);
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
        <div style={filterCtn}>
            <div style={filterBtn} className='filterBtn' onClick={toggleFilterOptionsBox}>
                <span style={filterDefaultOption}>{currentFilterOption}</span>
            </div>
            {
                isFilterOptionsBoxOpen && 
                (<ul style={filterOptionsCtn}>
                    {getFilterOptions}
                </ul>)
            }
        </div>
    )
}

export default Filter;
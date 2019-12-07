import React, {useState} from 'react';
import { useGlobalState } from '../../state/useGlobalState';
import { addTrackCtn, addTrackInput, addTrackBtn, trackNotFoundCtn } from './style.js';
import Actions from '../../helpers/tracksActions';

const AddTracks = () => {
    const [trackName, setTrackName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [isTrackNameEmptyOnAddTrackClick, setIsTrackNameEmptyOnAddTrackClick] = useState(false);
    const [isShowTrackNotFoundMsg, setIsShowTrackNotFoundMsg] = useGlobalState('isShowTrackNotFoundMsg');
    const { addTrack } = Actions();

    const handleSetTrackName = (event) => {
        setTrackName(event.target.value);
        setIsTrackNameEmptyOnAddTrackClick(false);
        setIsShowTrackNotFoundMsg(false);
    }

    const handleAddTrackClick = () => {
        if(!trackName){
            setIsTrackNameEmptyOnAddTrackClick(true);
        }else{
            addTrack(trackName, artistName);
        }
    }

    return(
        <div style={addTrackCtn}>
            <div>
                <input style={addTrackInput} 
                    type='text' 
                    placeholder='Track name' 
                    onChange={handleSetTrackName} 
                    className={isTrackNameEmptyOnAddTrackClick ? 'addTrackInput addTrackInputAlert' : 'addTrackInput'}
                />
                <input style={addTrackInput} 
                    type='text' 
                    placeholder='Artist name (optional)' 
                    onChange={event => setArtistName(event.target.value)}
                    className='addTrackInput' 
                />
                <button style={addTrackBtn} onClick={handleAddTrackClick} className='addTrackBtn'>
                    <span>Add a track</span>
                </button>
            </div>
            {
                isShowTrackNotFoundMsg &&
                (<div style={trackNotFoundCtn} className='trackNotFoundCtn'>
                    Track Not Found.
                </div>)
            }
        </div>
    )
}

export default AddTracks;
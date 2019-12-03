import React, {useState} from 'react';
import { addTrackCtn, addTrackInput, addTrackBtn } from './style.js';
import Actions from '../../helpers/tracksActions';

const AddTracks = () => {
    const { addTrack } = Actions();
    const [trackName, setTrackName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [isTrackNameEmptyOnAddTrackClick, setIsTrackNameEmptyOnAddTrackClick] = useState(false);

    const handleSetTrackName = (event) => {
        setTrackName(event.target.value);
        setIsTrackNameEmptyOnAddTrackClick(false);
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
            <input style={addTrackInput} 
                   type='text' 
                   placeholder='Track name' 
                   onChange={handleSetTrackName} 
                   className={isTrackNameEmptyOnAddTrackClick ? "addTrackInput" : ""}
            />
            <input style={addTrackInput} 
                   type='text' 
                   placeholder='Artist name (optional)' 
                   onChange={event => setArtistName(event.target.value)} 
            />
            <button style={addTrackBtn} onClick={handleAddTrackClick}>
                <span>Add a track</span>
            </button>
        </div>
    )
}

export default AddTracks;
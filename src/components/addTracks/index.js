import React, {useState} from 'react';
import { addTrackCtn, addTrackInput, addTrackBtn } from './style.js';

const AddTracks = () => {
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
        }else if(!artistName){
            // send both to addTrack
        }else{
            // addTrack only track name
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
                   placeholder='Artist name' 
                   onChange={event => setArtistName(event.target.value)} 
            />
            <button style={addTrackBtn} onClick={handleAddTrackClick}>
                <span>Add a track</span>
            </button>
        </div>
    )
}

export default AddTracks;
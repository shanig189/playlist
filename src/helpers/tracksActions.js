import { useGlobalState } from '../state/useGlobalState';
import MAX_NUM_OF_TRACKS from '../utils/enums';
import { getTracks } from './tracksApi';

const Actions = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    return { 
        addTrack: async (trackName, artistName) => {
            const tracksList = await getTracks(trackName, artistName);
            const randomTrack = tracksList[Math.floor(Math.random()*tracksList.length)];
            const { track_id, track_name, artist_name } = randomTrack.track;
            const track = {
                trackId: track_id,
                trackName: track_name,
                artistName: artist_name,
            }
            const updatedTracks =  [...tracks, track];
            localStorage.setItem('tracks', JSON.stringify(updatedTracks));
            //MAX_NUM_OF_TRACKS
            setTracks(updatedTracks);

        },
        deleteTrack: (trackId) => {
            // const updatedTracks = tracks
        },
        sortTracks: () => {

        }
    }
}

export default Actions;
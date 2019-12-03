import { useGlobalState } from '../state/useGlobalState';
import MAX_NUM_OF_TRACKS from '../utils/enums';
import { getTracks } from './tracksApi';
import compare from './compare';

const Actions = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    let originTracks = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : [];

    return { 
        addTrack: async (trackName, artistName) => {
            const tracksList = await getTracks(trackName, artistName);
            const randomTrack = tracksList[Math.floor(Math.random()*tracksList.length)];
            console.log(randomTrack)
            const { track_id, track_name, artist_name, album_name } = randomTrack.track;
            const track = {
                trackId: track_id,
                trackName: track_name,
                artistName: artist_name,
                albumName: album_name
            }
            const updatedTracks = originTracks = [...tracks, track];
            localStorage.setItem('tracks', JSON.stringify(updatedTracks));
            //MAX_NUM_OF_TRACKS
            setTracks(updatedTracks);

        },
        deleteTrack: (trackId) => {
            // const updatedTracks = tracks
        },
        sortTracks: (sortOption) => {
            const cloneTracks = originTracks.slice();

            switch(sortOption){
                case 'Track name': cloneTracks.sort(compare.bind(null, 'trackName')); break;
                case 'Artist name': cloneTracks.sort(compare.bind(null, 'artistName')); break;
                default:  break;
            }

            setTracks(cloneTracks);
        }
    }
}

export default Actions;
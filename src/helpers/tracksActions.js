import { useGlobalState } from '../state/useGlobalState';
import { MAX_NUM_OF_TRACKS } from '../utils/enums';
import { getTracksByName, getTrackLyrics } from './tracksApi';
import sortTracksByOption from './sortTracksByOption';
let trackToAddAfterDelete = {};

const Actions = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    const [isShowModal, setIsShowModal] = useGlobalState('isShowModal');
    const [sortOption, setSortOption] = useGlobalState('sortOption');
    let originTracks = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : [];
    let updatedTracks = originTracks;

    return { 
        addTrack: async (trackName, artistName) => {
            const tracksList = await getTracksByName(trackName, artistName);
            const randomTrack = tracksList[Math.floor(Math.random()*tracksList.length)];
            const { track_id, track_name, artist_name, album_name } = randomTrack.track;
            const track = {
                trackId: track_id,
                trackName: track_name,
                artistName: artist_name,
                albumName: album_name
            }
            if(updatedTracks.length === MAX_NUM_OF_TRACKS){
                trackToAddAfterDelete = track;
                setIsShowModal(true);
            }else{
                updatedTracks = originTracks = [...tracks, track];
                localStorage.setItem('tracks', JSON.stringify(updatedTracks));
                setTracks(updatedTracks);
            }

        },
        deleteTrack: () => {
            updatedTracks.shift();
            updatedTracks.push(trackToAddAfterDelete);
            localStorage.setItem('tracks', JSON.stringify(updatedTracks));
            
            if(sortOption !== 'Default'){
                updatedTracks = sortTracksByOption(updatedTracks, sortOption);
            }
            
            setTracks(updatedTracks);
        },
        sortTracks: (sortOption) => {
            localStorage.setItem('tracksSortOption', sortOption);
            const sortedTracks = sortTracksByOption(updatedTracks, sortOption);

            setTracks(sortedTracks);
        },
        getTrackLyrics: async (trackId) => {
            const { lyrics_body } = await getTrackLyrics(trackId);

            return lyrics_body;
        },
    }
}

export default Actions;
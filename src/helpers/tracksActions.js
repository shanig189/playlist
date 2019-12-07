import { useGlobalState } from '../state/useGlobalState';
import { MAX_NUM_OF_TRACKS } from '../utils/enums';
import { getTracksByName, getTrackLyrics } from './tracksApi';
import sortTracksByOption from './sortTracksByOption';
let trackToAddAfterDelete = {};

const Actions = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    const [sortOption, setSortOption] = useGlobalState('sortOption');
    const [isShowModal, setIsShowModal] = useGlobalState('isShowModal');
    const [isShowTrackNotFoundMsg, setIsShowTrackNotFoundMsg] = useGlobalState('isShowTrackNotFoundMsg');
    let originTracks = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : [];

    return { 
        addTrack: async (trackName, artistName) => {
            const tracksList = await getTracksByName(trackName, artistName);
            if(tracksList.length){
                setIsShowTrackNotFoundMsg(false);
                const randomTrack = tracksList[Math.floor(Math.random()*tracksList.length)];
                const { track_id, track_name, artist_name, album_name } = randomTrack.track;
                const track = {
                    trackId: track_id,
                    trackName: track_name,
                    artistName: artist_name,
                    albumName: album_name
                }
    
                if(originTracks.length === MAX_NUM_OF_TRACKS){
                    trackToAddAfterDelete = track;
                    setIsShowModal(true);
                }else{
                    originTracks.unshift(track);
                    localStorage.setItem('tracks', JSON.stringify(originTracks));
                    setTracks(originTracks);
                }
            }else{
                setIsShowTrackNotFoundMsg(true);
            }
        },
        deleteTrack: () => {
            originTracks.pop();
            originTracks.unshift(trackToAddAfterDelete);
            localStorage.setItem('tracks', JSON.stringify(originTracks));
            
            let updatedTracks = originTracks;

            if(sortOption !== 'Default'){
                updatedTracks = sortTracksByOption(updatedTracks, sortOption);
            }
            
            setTracks(updatedTracks);
        },
        sortTracks: (sortOption) => {
            localStorage.setItem('tracksSortOption', sortOption);
            const sortedTracks = sortTracksByOption(originTracks, sortOption);

            setTracks(sortedTracks);
        },
        getTrackLyrics: async (trackId) => {
            const trackLyrics = await getTrackLyrics(trackId);

            return trackLyrics;
        },
    }
}

export default Actions;
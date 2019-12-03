import { useGlobalState } from '../state/useGlobalState';
import { MAX_NUM_OF_TRACKS } from '../utils/enums';
import { getTracks } from './tracksApi';
import compare from './compare';

const Actions = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    const [isShowModal, setIsShowModal] = useGlobalState('isShowModal');
    const [sortOption, setSortOption] = useGlobalState('sortOption');
    let originTracks = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : [];
    let updatedTracks = originTracks;
    let trackToAddAfterDelete = {};

    const sortTracksByOption = (sortOption) => {
        const cloneTracks = updatedTracks.slice();
    
        switch(sortOption){
            case 'Track name': cloneTracks.sort(compare.bind(null, 'trackName')); break;
            case 'Artist name': cloneTracks.sort(compare.bind(null, 'artistName')); break;
            default: break;
        }

        setTracks(cloneTracks);
    }

    return { 
        addTrack: async (trackName, artistName) => {
            const tracksList = await getTracks(trackName, artistName);
            const randomTrack = tracksList[Math.floor(Math.random()*tracksList.length)];
            const { track_id, track_name, artist_name, album_name } = randomTrack.track;
            const track = {
                trackId: track_id,
                trackName: track_name,
                artistName: artist_name,
                albumName: album_name
            }
            if(updatedTracks.length === MAX_NUM_OF_TRACKS){
                console.log("MAX_NUM_OF_TRACKS",MAX_NUM_OF_TRACKS)
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
                sortTracksByOption(sortOption);
            }else{
                setTracks(updatedTracks);
            }
        },
        sortTracks: (sortOption) => {
            sortTracksByOption(sortOption);
        }
    }
}

export default Actions;
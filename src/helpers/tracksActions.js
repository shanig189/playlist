import { useGlobalState } from '../store/useGlobalState';
import MAX_NUM_OF_TRACKS from '../utils/enums';

const Actions = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    return { 
        addTrack: () => {
            console.log(tracks);
        }
    }
}



export default Actions;
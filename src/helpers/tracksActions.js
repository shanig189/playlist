import { useGlobalState } from '../store/useGlobalState';
import MAX_NUM_OF_TRACKS from '../utils/enums';

const Actions = () => {
    const [tracks, setTracks] = useGlobalState('tracks');
    return { 
        addTrack: () => {
            const tracks1 =  [...tracks, "2"]
            setTracks(tracks1);
        }
    }
}

export default Actions;
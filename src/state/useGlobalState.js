import getInitialTracks from '../helpers/getInitialTracks';
import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
     tracks: getInitialTracks(),
     isShowModal: false,
     sortOption: 'Default',
     chosenTrack: null 
    };
const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export {GlobalStateProvider, useGlobalState};
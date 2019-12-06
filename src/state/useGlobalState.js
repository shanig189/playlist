import { createGlobalState } from 'react-hooks-global-state';
import getInitialParams from '../helpers/getInitialParams';

const  { tracks, sortOption } = getInitialParams();

const initialState = {
     tracks,
     sortOption,
     isShowModal: true,
     chosenTrack: null 
    };
const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export {GlobalStateProvider, useGlobalState};
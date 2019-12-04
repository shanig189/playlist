import { createGlobalState } from 'react-hooks-global-state';

const tracksFromLocalStorage = localStorage.getItem('tracks') ? JSON.parse(localStorage.getItem('tracks')) : null;
const initialState = {
     tracks: tracksFromLocalStorage || [],
     isShowModal: false,
     sortOption: 'Default',
     chosenTrack: null 
    };
const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export {GlobalStateProvider, useGlobalState};
import { createGlobalState } from 'react-hooks-global-state';

const initialState = { tracks: localStorage.getItem('tracks') || [] };
const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export {GlobalStateProvider, useGlobalState};
import { createGlobalState } from 'react-hooks-global-state';

const initialState = { tracks: localStorage.getItem('tracks') || ["1"] };
const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

export {GlobalStateProvider, useGlobalState};
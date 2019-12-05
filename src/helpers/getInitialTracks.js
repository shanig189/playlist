import sortTracksByOption from './sortTracksByOption';

export default () => {
    const localStorageTracks = localStorage.getItem('tracks');
    let tracks = [];

    if(localStorageTracks){
        tracks = JSON.parse(localStorage.getItem('tracks'));
        const localStorageSortOption = localStorage.getItem('tracksSortOption');
        if(localStorageSortOption && localStorageSortOption !== 'Default'){
            tracks = sortTracksByOption(tracks, localStorageSortOption);
        }
    }

    return tracks;
}
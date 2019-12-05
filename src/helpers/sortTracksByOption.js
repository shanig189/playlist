import compare from './compare';

export default (tracks, sortOption) => {
    const cloneTracks = tracks.slice();

    switch(sortOption){
        case 'Track name': cloneTracks.sort(compare.bind(null, 'trackName')); break;
        case 'Artist name': cloneTracks.sort(compare.bind(null, 'artistName')); break;
        default: break;
    }

    return cloneTracks;
}
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // for cors problem
const url = 'http://api.musixmatch.com/ws/1.1/';
const key = '363d6ff81d8b621aa464d2b3ae1ec576';
const options = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}

const getTracks = async (params) => {
    const response = await fetch(`${proxyUrl}${url}${params}&apikey=${key}`, options);
    let data = await response.json();
    const { track_list } = data.message.body;
    return track_list;
}

export const getTracksByTrackName = async (tracktName) => {
    const params = `track.search?q_track=${tracktName}`;
    return await getTracks(params);
}

export const getTracksByArtistName = async (artistName) => {
    const params = `track.search?q_artist=${artistName}`;
    return await getTracks(params);
}

export const getTracksByTrackNameAndArtistName = async (tracktName, artistName) => {
    const params = `track.search?q_track=${tracktName}&q_artist=${artistName}`;
    return await getTracks(params);
}
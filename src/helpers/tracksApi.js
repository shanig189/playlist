const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // for cors problem
const url = 'http://api.musixmatch.com/ws/1.1/';
const key = '363d6ff81d8b621aa464d2b3ae1ec576';
const options = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
}

export const getTracks = async (trackName, artistName) => {
    let params = `track.search?q_track=${trackName}`;

    if(artistName){
        params += `&q_artist=${artistName}`;
    }

    const response = await fetch(`${proxyUrl}${url}${params}&apikey=${key}`, options);
    const data = await response.json();
    const { track_list } = data.message.body;

    return track_list;
}
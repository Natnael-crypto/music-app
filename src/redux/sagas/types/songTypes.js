export const GET_SONGS = 'GET_SONGS';
export const CREATE_SONG = 'CREATE_SONG';
export const UPDATE_SONG_BY_ID = 'UPDATE_SONG_BY_ID';
export const DELETE_SONG_BY_ID = 'DELETE_SONG_BY_ID';

export const getSongsRequest=()=>{
    return {
        type:GET_SONGS
    }
}

export const createSongRequest=(song)=>{
    return {
        type:CREATE_SONG,
        song:song
    }
}

export const deleteSongRequest=(id)=>{
    return {
        type:DELETE_SONG_BY_ID,
        id:id
    }
}

export const updateSongRequest=(song)=>{
    return {
        type:UPDATE_SONG_BY_ID,
        song:song
    }
}
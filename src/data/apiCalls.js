import axios from 'axios'

const API_URL = 'https://natnaelcrypto.pythonanywhere.com/';

export const getSongsEndPoint = async () => axios.get(API_URL);

export const createSongEndPoint = async (song) => {
    axios.post(API_URL,song)
};

export const updateSongEndPoint = async (song) => axios.put(`${API_URL}/${song.uuid}`,song);

export const deleteSongByIdEndPoint = async (id) => axios.delete(`${API_URL}/${id}`);
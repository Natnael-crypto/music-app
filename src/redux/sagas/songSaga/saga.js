import { getSongsEndPoint,updateSongEndPoint,deleteSongByIdEndPoint,createSongEndPoint } from '../../../data/apiCalls';
import { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } from '../../slices/songSlice/slice';
import { CREATE_SONG,GET_SONGS,UPDATE_SONG_BY_ID,DELETE_SONG_BY_ID } from '../types/songTypes';
import { put, takeEvery } from 'redux-saga/effects'


export function* getSongsSaga() {
    const songs = yield getSongsEndPoint()
    yield put(getSongsSlice(songs.data))
}

export function* createSongSaga(action) {
    const song=yield createSongEndPoint(action.song)
    yield put(addSongSlice(song.data))
}

export function* updateSongSaga(action) {
    yield updateSongEndPoint(action.song)
    const songs = yield getSongsEndPoint()
    yield put(getSongsSlice(songs.data))
}

export function* deleteSongByIdSaga(action) {
    yield deleteSongByIdEndPoint(action.id)
    const songs = yield getSongsEndPoint()
    yield put(getSongsSlice(songs.data))
}

export function* watchUsersAsync() {
    yield takeEvery(GET_SONGS, getSongsSaga)
    yield takeEvery(CREATE_SONG, createSongSaga)
    yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga)
    yield takeEvery(DELETE_SONG_BY_ID, deleteSongByIdSaga)
}
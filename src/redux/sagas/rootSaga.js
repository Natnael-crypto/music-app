import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./songSaga/saga";

function* rootSaga() {
    yield all([
        watchSongsAsync()
    ])
}

export default rootSaga;

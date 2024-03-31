import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./songSaga/saga";

function* rootSaga() {
    yield all([
        watchUsersAsync()
    ])
}

export default rootSaga;
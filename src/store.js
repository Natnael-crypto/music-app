import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from './redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        songs
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store;
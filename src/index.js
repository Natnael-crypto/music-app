import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/rootSaga';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/slices/songSlice/slice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
    }
);

sagaMiddleware.run(rootSaga);

root.render(
    <Provider store={store}>
    <App />
    </Provider>,
);


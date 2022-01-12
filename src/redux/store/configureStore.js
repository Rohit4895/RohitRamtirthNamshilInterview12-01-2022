import { combineReducers, createStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootReducer'

var store = null

const configureStore = () => {
    const reducers = {
        rootReducer
    }

    const reducer = combineReducers(reducers);

    if (!store) {
        store = createStore(
            reducer
        );
    }

    return store
}

export default configureStore;
import { createStore } from 'redux'
import { persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistedReducer from './reducers'

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
const aux = { store, persistor }
export default aux;
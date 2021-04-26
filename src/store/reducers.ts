import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import User from './User';
import storage from 'redux-persist/lib/storage/session'; //sessionStorage

const persistConfig = {
  key: 'user',
  storage,
};

const rootReducer = combineReducers({
  User: User
});

export default persistReducer<RootState>(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
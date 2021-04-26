import { combineReducers } from 'redux';

import infoReducer from "../User/info/info.reducer";

export default combineReducers({
    Info: infoReducer,
});

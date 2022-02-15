import { combineReducers } from 'redux';
import avatar from './modules/avatar';
import overlay from './modules/overlay';

const reducers = combineReducers({ avatar, overlay });
export default reducers;

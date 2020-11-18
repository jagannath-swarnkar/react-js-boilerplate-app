
import { combineReducers } from 'redux';
import { configReducer } from './config';
import { counterReducer } from './counter';

const allReducers = combineReducers({
    counter: counterReducer,
    config: configReducer
})

export default allReducers;

import { combineReducers } from 'redux';
import { configReducer } from './config';
import { counterReducer } from './counter';
import globalReducer from './globalReducer';

const allReducers = combineReducers({
    store: globalReducer,
    counter: counterReducer,
    config: configReducer,
})

export default allReducers;
import {combineReducers} from 'redux';

import dataFetchReducer from './dataFetchReducer';

const rootReducer = combineReducers({
    fetchData: dataFetchReducer
});

export default rootReducer;
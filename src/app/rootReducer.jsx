import { combineReducers } from '@reduxjs/toolkit';

import homeReducer from '../features/home/slice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;

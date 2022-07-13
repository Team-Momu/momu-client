import { combineReducers } from 'redux';
import mbtiSlice from './mbti/mbtiSlice';
import curationPostSlice from './curation/curationPostSlice';
import userSlice from './user/userSlice';
// const { combineReducers } = require('redux');
// const mbtiSlice = require('./mbti/mbtiSlice');
// const curationPostSlice = require('./curation/curationPostSlice');
// const userSlice = require('./user/userSlice');

export const rootReducer = combineReducers({
  curation: curationPostSlice.reducer,
  mbti: mbtiSlice.reducer,
  user: userSlice.reducer,
});

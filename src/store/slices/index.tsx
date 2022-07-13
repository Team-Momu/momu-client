const { combineReducers } = require('redux');
// const curationSlice = require('./dummy/curration/curationSlice');
const mbtiSlice = require('./mbti/mbtiSlice');
const curationPostSlice = require('./curation/curationSlice');
const userSlice = require('./user/userSlice');

export const rootReducer = combineReducers({
  curation: curationPostSlice.reducer,
  mbti: mbtiSlice.reducer,
  user: userSlice.reducer,
});

const { combineReducers } = require('redux');
// const curationSlice = require('./dummy/curration/curationSlice');
const mbtiSlice = require('./dummy/mbti/mbtiSlice');
const curationSlice = require('./dummy/curation/curationSlice');
const userSlice = require('./dummy/user/userSlice');

export const rootReducer = combineReducers({
  curation: curationSlice.reducer,
  mbti: mbtiSlice.reducer,
  user: userSlice.reducer,
});

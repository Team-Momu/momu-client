const { combineReducers } = require('redux');
// const curationSlice = require('./dummy/curration/curationSlice');
const mbtiSlice = require('./dummy/mbti/mbtiSlice');

export const rootReducer = combineReducers({
  // curation: curationSlice.reducer,
  mbti: mbtiSlice.reducer,
});

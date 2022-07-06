const { combineReducers } = require('redux');
const curationSlice = require('./curationSlice');

module.exports = combineReducers({
  curation: curationSlice.reducer,
});

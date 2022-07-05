const { combineReducers } = require('redux');
const curationSlice = require('./curation');

module.exports = combineReducers({
  curation: curationSlice.reducer,
});

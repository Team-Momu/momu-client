const { configureStore } = require('@redux/toolkit');
const slice = require('./slices');

const store = configureStore({
  slice,
});

module.exports = store;

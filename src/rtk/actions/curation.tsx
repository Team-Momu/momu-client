const { createAsyncThunk } = require('@reduxjs/toolkit');

const name = 'curation';
exports.addCurationQuestion = createAsyncThunk(
  '',
  async (data: any, thunkAPI: any) => {
    return await data;
  }
);

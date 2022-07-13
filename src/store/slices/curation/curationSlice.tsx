//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ICurationPost,
  ICurationPostLists,
} from '../../../utils/interfaces/curation/curationInterfaces';

const initialState: ICurationPostLists = {
  CurationPostLists: [],
  pending: false,
};

export const getCurationPostLists = createAsyncThunk(
  'curation/getCurationPostLists',
  async (data, thunkAPI) => {}
);

const curationPostSlice = createSlice({
  name: 'curation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurationPostLists.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCurationPostLists.fulfilled, (state, action) => {
        state.CurationPostLists = action.payload as unknown as ICurationPost[];
        state.pending = false;
      })
      .addCase(getCurationPostLists.rejected, (state, action) => {
        state.pending = false;
        //error 처리 필요
      });
  },
});

module.exports = curationPostSlice;

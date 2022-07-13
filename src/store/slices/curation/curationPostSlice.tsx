//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ICurationPost,
  ICurationPostLists,
} from '../../../utils/interfaces/curation/curationInterfaces';
import axios from 'axios';

const initialState: ICurationPostLists = {
  CurationPostLists: [],
  pending: false,
};

// createAsyncThunk(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator, options?: AsyncThunkOptions): AsyncThunk
export const getCurationPostListsThunk = createAsyncThunk(
  'curation/getCurationPostLists',
  async () => {
    const response = await axios.get('/feed/');
    if (!response) {
      console.log('error');
    }
    return response.data.results;
  }
);

export const curationPostSlice = createSlice({
  name: 'curation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurationPostListsThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCurationPostListsThunk.fulfilled, (state, action) => {
        state.CurationPostLists = action.payload as ICurationPost[];
        state.pending = false;
      })
      .addCase(getCurationPostListsThunk.rejected, (state, action) => {
        state.pending = false;
        //error 처리 필요
      });
  },
});

export default curationPostSlice.reducer;

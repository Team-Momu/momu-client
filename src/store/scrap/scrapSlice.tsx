import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IScrapInfo } from 'utils/interfaces/scrap/scrapinterface';
import axios from 'axios';

const initialState: IScrapInfo = {
  user: 0,
  post: 0,
  pending: false,
};

export const postScrapStateThunk = createAsyncThunk(
  'scrap/postScrapState',
  async (scrapInfo: IScrapInfo, thunkAPI) => {
    const response = await axios.post('/feed/scrap/', scrapInfo);
    return response.data;
  }
);

export const deleteScrapStateThunk = createAsyncThunk(
  'scrap/deleteScrapState',
  async (postId: number, tunkAPI) => {
    const response = await axios.delete('/feed/scrap/');
    return postId;
  }
);

export const scrapSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postScrapStateThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(postScrapStateThunk.fulfilled, (state, action) => {})
      .addCase(postScrapStateThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      });
  },
});

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  IPostScrapInfo,
  IScrapInfo,
} from 'utils/interfaces/scrap/scrapinterface';
import axios from 'axios';

const initialState: IScrapInfo = {
  message: '',
  data: {
    id: 0,
    user: 0,
    post: 0,
  },
  pending: false,
};

export const postScrapStateThunk = createAsyncThunk(
  'scrap/postScrapState',
  async (post: number, thunkAPI) => {
    const response = await axios.post('/feed/scrap/', post);
    return response.data;
  }
);

export const deleteScrapStateThunk = createAsyncThunk(
  'scrap/deleteScrapState',
  async (post: number, thunkAPI) => {
    const response = await axios.delete('/feed/scrap/', { data: post });
    return response.data;
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
      .addCase(deleteScrapStateThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(postScrapStateThunk.fulfilled, (state, action) => {
        state.data.user = action.payload.data.user;
        state.data.post = action.payload.data.post;
        state.pending = false;
        console.log(state.data);
      })
      .addCase(deleteScrapStateThunk.fulfilled, (state, action) => {
        state.pending = false;
      })
      .addCase(postScrapStateThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      })
      .addCase(deleteScrapStateThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      });
  },
});

export default scrapSlice.reducer;

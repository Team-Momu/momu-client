//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ICurationPost,
  ICurationPostLists,
  IDetailCurationPost,
} from '../../../utils/interfaces/curation/curationInterfaces';
import axios from 'axios';

const initialState: ICurationPostLists = {
  message: '',
  data: {
    next: '',
    previous: '',
    results: [],
  },
  pending: false,
};

// createAsyncThunk(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator, options?: AsyncThunkOptions): AsyncThunk
export const getCurationPostListsThunk = createAsyncThunk(
  'curation/getCurationPostLists',
  async (hasNext: string, thunkAPI) => {
    if (hasNext) {
      const response = await axios.get(`/feed/?cursor=${hasNext}`);
      if (!response) {
        console.log('error');
      }
      return response.data;
    } else if (hasNext === '') {
      const response = await axios.get('/feed/');
      if (!response) {
        console.log('error');
      }
      return response.data;
    }
  }
);

// initialState에서 나눈대로 데이터 패칭하기... 꼭 ....
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
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.pending = action.payload.pending;
        state.pending = false;
      })

      .addCase(getCurationPostListsThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      });
  },
});

export default curationPostSlice.reducer;

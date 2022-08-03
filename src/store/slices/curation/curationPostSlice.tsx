//GetCurationCard

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  ICurationPost,
  ICurationPostLists,
  IDetailCurationPost,
} from '../../../utils/interfaces/curation/curationInterfaces';
import axios from 'axios';
import { getFilteredCurationThunk } from '@slices/filter/filterThunk';

const initialState: ICurationPostLists = {
  message: '',
  data: {
    next: '',
    previous: '',
    results: [],
  },
  status: '',
  error: null,
  cursor: null,
  pending: false,
};

// [
//   {
//     id: 1,
//     user: {
//       id: 1,
//       nickname: 'siwon',
//       profile_img: '',
//       mbti: '',
//       level: 1,
//       select_count: 0,
//     },
//     created_at: '2022.07.28',
//     location: '대현동',
//     time: '점심',
//     drink: 1,
//     member_count: 2,
//     comment_count: 0,
//     description: 'dd',
//     selected_flag: false,
//     scrap_flag: false,
//   },
// ]

// createAsyncThunk(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator, options?: AsyncThunkOptions): AsyncThunk

interface SystemError {
  message: string;
}

export const getCurationPostListsThunk = createAsyncThunk(
  'curation/getCurationPostLists',
  async (_, { rejectWithValue }) => {
    try {
      // const access_token = localStorage.getItem('access_token');
      // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      const response = await axios.get('/feed/');
      return response.data;
    } catch (error) {
      const e = error as SystemError;
      return rejectWithValue({ message: e.message });
    }
  }
);

export const getMoreCurationPostListsThunk = createAsyncThunk(
  'curation/getMoreCurationPostLists',
  async (cursor: string) => {
    const response = await axios.get(`/feed/?cursor=${cursor}`);
    return response.data;
  }
);

// initialState에서 나눈대로 데이터 패칭하기... 꼭 ....
export const curationPostSlice = createSlice({
  name: 'curation',
  initialState,
  reducers: {
    setCursor: (state, action) => {
      state.cursor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurationPostListsThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getFilteredCurationThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getMoreCurationPostListsThunk.pending, (state) => {
        state.status = 'pending';
        state.pending = true;
      })
      .addCase(getCurationPostListsThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.status = action.payload.pending;
        state.status = 'success';
      })
      .addCase(getFilteredCurationThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.status = 'success';
      })
      .addCase(getMoreCurationPostListsThunk.fulfilled, (state, action) => {
        state.data.next = action.payload.data.next;
        state.data.previous = action.payload.data.previous;
        state.data.results = state.data.results.concat(
          action.payload.data.results
        );
        state.status = 'success';
        state.pending = false;
      })
      .addCase(getCurationPostListsThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getFilteredCurationThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      })
      .addCase(getMoreCurationPostListsThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

export default curationPostSlice.reducer;

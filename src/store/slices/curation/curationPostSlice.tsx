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
export const getCurationPostListsThunk = createAsyncThunk(
  'curation/getCurationPostLists',
  async () => {
    const response = await axios.get('/feed/');
    return response.data;
  }
);

export const getMoreCurationPostListsThunk = createAsyncThunk(
  'curation/getMoreCurationPostLists',
  async () => {
    const response = await axios.get(
      `/feed/?cursor=cj0xJnA9MjAyMi0wNy0xMSsxMiUzQTQ0JTNBNDEuOTAzNjU2JTJCMDAlM0EwMA%3D%3D`
    );
    return response.data;
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
        state.status = 'pending';
      })
      .addCase(getFilteredCurationThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getMoreCurationPostListsThunk.pending, (state) => {
        state.status = 'pending';
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
        state.status = action.payload.pending;
        state.status = 'success';
      })
      .addCase(getMoreCurationPostListsThunk.fulfilled, (state, action) => {
        state.data.results = state.data.results.concat(
          action.payload.data.results
        );
        state.status = 'success';
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

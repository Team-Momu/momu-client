import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IGetPlaceData } from 'utils/interfaces/comment/commentInterface';
import axios from 'axios';

const initialState: IGetPlaceData = {
  status: '',
  error: null,
  message: '',
  data: [],
  page: 0,
  total: 0,
};

export const getPlaceDatasThunk = createAsyncThunk(
  'comments/getPlaceDatas',
  async (keyword: string, thunkAPI) => {
    const response = await axios.get(`/feed/search/?keyword=${keyword}`);
    return response.data;
  }
);

export const getCommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaceDatasThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getPlaceDatasThunk.fulfilled, (state, { payload }) => {
        state.message = payload.message;
        state.data = payload.data;
        state.page = payload.page;
        state.total = payload.total;
        state.status = 'fulfilled';
      })
      .addCase(getPlaceDatasThunk.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error;
      });
  },
});

export default getCommentSlice.reducer;

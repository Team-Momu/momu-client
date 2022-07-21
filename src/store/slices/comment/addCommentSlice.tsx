import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IGetPlaceData } from 'utils/interfaces/comment/commentInterface';
import axios from 'axios';

const initialState: IGetPlaceData = {
  pending: false,
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

export const addCommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaceDatasThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getPlaceDatasThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.page = action.payload.page;
        state.total = action.payload.total;
        state.pending = false;
      })
      .addCase(getPlaceDatasThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      });
  },
});

export default addCommentSlice.reducer;

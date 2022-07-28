import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ISelectedInfo, ISelectState } from 'utils/select/selectinterface';

const initialState: ISelectState = {
  message: '',
  pending: false,
};

export const postSelectedStateThunk = createAsyncThunk(
  'select/postSelectedState',
  async (selectInfo: ISelectedInfo, thunkAPI) => {
    const response = await axios.post(
      `/feed/${selectInfo.postId}/select/${selectInfo.commentId}/`
    );
    return response.data;
  }
);

export const deleteSelectedStateThunk = createAsyncThunk(
  'select/deleteSelectedState',
  async (selectInfo: ISelectedInfo, thunkAPI) => {
    const response = await axios.delete(
      `/feed/${selectInfo.postId}/select/${selectInfo.commentId}/`
    );
    return response.data;
  }
);

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postSelectedStateThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(deleteSelectedStateThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(postSelectedStateThunk.fulfilled, (state, action) => {
        state.message = action.payload;
        state.pending = false;
      })
      .addCase(deleteSelectedStateThunk.fulfilled, (state, action) => {
        state.message = action.payload;
        state.pending = false;
      })
      .addCase(postSelectedStateThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.pending = false;
        console.error(action.error);
      })
      .addCase(deleteSelectedStateThunk.rejected, (state, action) => {
        state.message = action.payload;
        state.pending = false;
        console.error(action.error);
      });
  },
});

export default selectSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICommentPostLists } from 'utils/interfaces/comment/commentInterface';
import { ICommentThunkProps } from 'utils/interfaces/comment/commentInterface';
const initialState: ICommentPostLists = {
  message: '',
  data: {
    next: '',
    previous: '',
    results: [],
  },
  pending: false,
};

export const getCommentPostListsThunk = createAsyncThunk(
  'postComments/getCurationPostLists',
  async (CommentThunkProps: ICommentThunkProps, thunkAPI) => {
    if (CommentThunkProps.hasNext) {
      const response = await axios.get(
        `/feed/${CommentThunkProps.postId}/comment/?cursor=${CommentThunkProps.hasNext}`
      );
      if (!response) {
        console.log('error');
      }
      return response.data;
    } else if (!CommentThunkProps.hasNext) {
      const response = await axios.get(
        `/feed/${CommentThunkProps.postId}/comment/`
      );
      if (!response) {
        console.log('error');
      }
      return response.data;
    }
  }
);

export const commentPostSlice = createSlice({
  name: 'postComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentPostListsThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCommentPostListsThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data = action.payload.data;
        state.pending = action.payload.pending;
        state.pending = false;
      })
      .addCase(getCommentPostListsThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      });
  },
});

export default commentPostSlice.reducer;

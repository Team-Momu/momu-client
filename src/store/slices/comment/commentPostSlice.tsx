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
  async (postId: number, thunkAPI) => {
    const response = await axios.get(`/feed/${postId}/comment/`);
    if (!response) {
      console.log('error');
    }
    return response.data;
  }
);
export const getMoreCommentPostListsThunk = createAsyncThunk(
  'postComments/getMoreCurationPostLists',
  async ({ postId, cursor }: ICommentThunkProps, thunkAPI) => {
    const response = await axios.get(
      `/feed/${postId}/comment/?cursor=${cursor}`
    );
    if (!response) {
      console.log('error');
    }
    return response.data;
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
        state.pending = false;
      })
      .addCase(getCommentPostListsThunk.rejected, (state, action) => {
        state.pending = false;
        console.error(action.error);
      })
      .addCase(getMoreCommentPostListsThunk.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getMoreCommentPostListsThunk.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.data.next = action.payload.data.next;
        state.data.results = state.data.results.concat(
          action.payload.data.results
        );
        state.pending = false;
      });
  },
});

export default commentPostSlice.reducer;

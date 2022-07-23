import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  IAddComment,
  IPlaceData,
} from 'utils/interfaces/comment/commentInterface';

const initialState: IAddComment = {
  place: {
    address_name: '',
    category_group_code: '',
    category_group_name: '',
    category_name: '',
    distance: '',
    id: '',
    phone: '',
    place_name: '',
    place_url: '',
    road_address_name: '',
    x: '',
    y: '',
  },
  place_img: null,
  description: '',
};

export const addCommentThunk = createAsyncThunk(
  'addComment/addComment',
  async (addComment: { postId: number; comment: IAddComment }, thunkAPI) => {
    const response = await axios.post(
      `/feed/${addComment.postId}/comment/`,
      addComment.comment
    );
    return response.data;
  }
);

export const CreateCommentSlice = createSlice({
  name: 'createComment',
  initialState,
  reducers: {
    setComment: (
      state,
      action: PayloadAction<{
        place: IPlaceData;
        place_img: FormData;
        description: string;
      }>
    ) => {
      state.place = action.payload.place;
      state.place_img = action.payload.place_img;
      state.description = action.payload.description;
    },
  },
});

export const { setComment } = CreateCommentSlice.actions;

export const addCommentSlice = createSlice({
  name: 'addComment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCommentThunk.pending, (state) => {})
      .addCase(addCommentThunk.fulfilled, (state, action) => {})
      .addCase(addCommentThunk.rejected, (state, action) => {
        console.error(action.error);
      });
  },
});

export default addCommentSlice.reducer;

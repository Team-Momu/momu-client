import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAddCommentProps } from 'utils/interfaces/comment/commentInterface';
import axios from 'axios';

const initialState: any = {
  addCommentPending: false,
  addCommentSuccess: false,
  addCommentFail: false,
  pending: false,
  message: '',
  data: {
    //# 등록된 답글 정보
    id: 0, //# 답글 id
    user: 0,
    post: 0, //# 답글이 작성된 큐레이션 id
    place: 0, //# 식당 id
    place_img: '',
    description: '',
    created_at: '',
  },
};

export const addCommentThunk = createAsyncThunk(
  'addcomment/addcomment',
  async (addCommentProps: IAddCommentProps, thunkAPI) => {
    const response = await axios.post(
      `/feed/${addCommentProps.postId}/comment/`,
      addCommentProps.formData
    );
    return response.data;
  }
);

export const addCommentSlice = createSlice({
  name: 'addcomment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCommentThunk.pending, (state) => {
        state.addCommentPending = true;
        state.addCommentSuccess = false;
        state.addCommentFail = false;
      })
      .addCase(addCommentThunk.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.message = action.payload.message;
        state.addCommentPending = false;
        state.addCommentSuccess = true;
        state.addCommentFail = false;
      })
      .addCase(addCommentThunk.rejected, (state, action) => {
        state.addCommentPending = false;
        state.addCommentSuccess = false;
        state.addCommentFail = true;
        console.log(action.error);
      });
  },
});

export default addCommentSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import defaultImage from '@public/img/defaultProfile.png';

const initialState = {
  defaultImage,
  currentImagePath: null,
};

const profileSetSlice = createSlice({
  name: 'profileSet',
  initialState,
  reducers: {
    changeProfileImage: (state, { payload }) => {
      state.currentImagePath = payload;
    },
  },
});

export default profileSetSlice.reducer;

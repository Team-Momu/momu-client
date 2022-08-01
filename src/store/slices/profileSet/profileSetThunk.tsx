import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setProfile = createAsyncThunk(
  'profileSet/setProfile',
  async (formData: any, { rejectWithValue }) => {
    // const access_token = localStorage.getItem('access_token');
    // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    try {
      const response = await axios.put('/user/profile/', formData);
      return response.data;
    } catch (error) {
      console.error(error);
      const e = error as any;
      return rejectWithValue({ message: e.message });
    }
  }
);

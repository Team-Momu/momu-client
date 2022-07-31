import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../../lib/axios';
import axios from 'axios';
export const kakao = createAsyncThunk(
  'user/kakao',
  async (code: string, thunkAPI) => {
    const response = await axios.get(`/user/kakao/authorize/?code=${code}`);
    return response.data;
  }
);

interface ISystemError {
  message: any;
}

export const userInfo = createAsyncThunk(
  'user/userInfo',
  async (_, { rejectWithValue }) => {
    try {
      // const access_token = localStorage.getItem('access_token');
      // axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5MzE5NDA4LCJpYXQiOjE2NTkyMzMwMDgsImp0aSI6ImM0YmVkMjBjNTg3OTRhZDg5NTZiMWYyYzljZDdiODQxIiwidXNlcl9pZCI6N30.2bqARWZttgVG-PLMAe8Q5aHDU13og2FCaBpfeLcBBIs`;
      const response = await axios.get(`/user/profile/`);
      return response.data;
    } catch (error) {
      const e = error as ISystemError;
      return rejectWithValue({ message: e.message });
    }
  }
);

// response.data: {
//   message: '프로필 조회 성공',
//     data: {
//     id: 7,
//       nickname: 'asdf',
//       profile_img: 'https://momu-s3.s3.ap-northeast-2.amazonaws.com/profiles/448282dd-3db8-49a7-a430-0269b1711ca2',
//       mbti: 'CITR',
//       level: 5,
//       select_count: 1
//   }
// }

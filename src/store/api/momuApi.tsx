import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://3.39.85.242';
export const momuApi = createApi({
  reducerPath: 'momuApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCurationPosts: builder.query({ query: () => '/feed/' }),
  }),
});

//반드시 use[property 명]Query로 Hooks생성 이름이 다르면 오류 발생
export const { useGetCurationPostsQuery } = momuApi;

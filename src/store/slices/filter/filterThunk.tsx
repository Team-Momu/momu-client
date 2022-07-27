import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IAddCuration } from '../../../utils/interfaces/curation/curationInterfaces';

export const getFilteredCurationThunk = createAsyncThunk(
  'curation/getFilteredCuration',
  async (curationData: IAddCuration, thunkAPI) => {
    let location = '';
    let time = '';
    let drink = '';
    let member = '';
    let queryString = '';
    if (curationData.location) {
      location = `&location=${curationData.location}`;
    }
    if (curationData.time) {
      time = `&time=${curationData.time}`;
    }
    if (curationData.drink) {
      drink = `&drink=${curationData.drink}`;
    }
    if (curationData.member_count) {
      member = `&member_count=${curationData.member_count}`;
    }
    queryString = location + time + drink + member;

    if (queryString[0] === '&') {
      queryString = '?' + queryString.substring(1, queryString.length);
    }

    console.log(queryString);

    const response = await axios.get(`/feed/${queryString}`);
    return response.data;
  }
);

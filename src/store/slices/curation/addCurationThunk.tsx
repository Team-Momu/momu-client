import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAddCuration } from '../../../utils/interfaces/curation/curationInterfaces';

export const addCurationData = createAsyncThunk(
  'addCuration/addCurationData',
  async (curationData: IAddCuration, thunkAPI) => {
    const response = await axios.post('/feed/', curationData);
    return response.data;
  }
);

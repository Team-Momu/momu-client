import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAddCuration } from '../../../utils/interfaces/curation/curationInterfaces';

export const getFilteredCurationThunk = createAsyncThunk(
  'curation/getFilteredCuration',
  async (curationData: IAddCuration, thunkAPI) => {
    const response = await axios.get(
      `/feed/?location=${curationData.location}&time=${curationData.time}&drink=${curationData.drink}&member_count=${curationData.member_count}`
    );
    return response.data;
  }
);

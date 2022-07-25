import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { useCallback } from 'react';
import { useAppDispatch } from 'store/store';

export const onClickCount = useCallback((e: any) => {
  const dispatch = useAppDispatch();
  const count = e.target.innerText;
  dispatch(addCurationSlice.actions.resetActiveInCount());
  findTypeOfCount(count);
}, []);

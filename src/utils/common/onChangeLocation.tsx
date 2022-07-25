import { useCallback } from 'react';
import { useAppDispatch } from 'store/store';

export const onChangeLocation = useCallback((e: any) => {
  const dispatch = useAppDispatch();
  const location = e.target.value;
  dispatch(addCurationSlice.actions.resetLocation());
  findTypeOfLocation(location);
}, []);

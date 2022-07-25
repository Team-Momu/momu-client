import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { useDispatch } from 'react-redux';

export const findTypeOfCount = (
  count: string,
  dispatch: Dispatch<AnyAction>
) => {
  switch (count) {
    case '혼자':
      dispatch(addCurationSlice.actions.changeActiveAlonInCount(1));
      break;
    case '둘이서':
      dispatch(addCurationSlice.actions.changeActiveTwoInCount(2));
      break;
    case '3~4명':
      dispatch(addCurationSlice.actions.changeActiveThreeInCount(3));
      break;
    case '5인 이상':
      dispatch(addCurationSlice.actions.changeActiveMoreThanFiveInCount(4));
      break;
    default:
      break;
  }
};

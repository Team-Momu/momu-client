import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

export const findTypeOfTime = (time: string, dispatch: Dispatch<AnyAction>) => {
  switch (time) {
    case '아침':
      dispatch(addCurationSlice.actions.changeActiveMorningInTime('아침'));
      break;
    case '점심':
      dispatch(addCurationSlice.actions.changeActiveAfternoonInTime('점심'));
      break;
    case '저녁':
      dispatch(addCurationSlice.actions.changeActiveEveningInTime('저녁'));
      break;
    case '밤':
      dispatch(addCurationSlice.actions.changeActiveMidnightInTime('밤'));
      break;
    default:
      break;
  }
};

import { addCurationSlice } from '@slices/curation/addCurationSlice';
import { useAppDispatch } from 'store/store';

export const findTypeOfCount = (count: string) => {
  const dispatch = useAppDispatch();
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

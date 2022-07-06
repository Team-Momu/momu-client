import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useCallback } from 'react';
const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');

const Home: NextPage = () => {
  const {
    mbti: { test },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(mbtiSlice.actions.changeState());
  }, [dispatch]);

  console.log(onClick);
  return (
    <>
      <span>hi</span>
      <button onClick={onClick}>버튼</button>
      {test && 'hi'}
    </>
  );
};

export default Home;

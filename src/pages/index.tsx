import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from '@slices/dummy/mbti/mbtiSlice';
import { RootState } from 'store/store';
const Home: NextPage = () => {
  const {
    mbti: { test },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  console.log(changeState);
  return (
    <>
      <span>hi</span>
      <button onClick={() => alert('hi')}>버튼</button>
      {test && 'hi'}
    </>
  );
};

export default Home;

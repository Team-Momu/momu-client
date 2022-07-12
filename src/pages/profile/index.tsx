import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

const Home: NextPage = () => {
  const mbti = useSelector((state: RootState) => state.mbti.mbti);
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          border: '1px dotted black',
          marginTop: '100px',
        }}
      >
        <h1>❌모무데브 개발 중❌</h1>

        <div>당신의 먹비티아이는</div>
        <h1>{mbti}</h1>
        <div>입니다.</div>
      </div>
    </>
  );
};

export default Home;

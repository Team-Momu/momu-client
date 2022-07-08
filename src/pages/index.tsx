import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
const mbtiSlice = require('@slices/dummy/mbti/mbtiSlice');

const Home: NextPage = () => {
  const router = useRouter();

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

        <button
          onClick={() => router.push('/profile/1')}
          style={{ marginBottom: '20px' }}
        >
          누르면 먹비티아이로 넘어가는 버튼
        </button>

        <button onClick={() => router.push('/feed')}>
          누르면 피드로 넘어가는 버튼
        </button>
      </div>
    </>
  );
};

export default Home;

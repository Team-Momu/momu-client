import type { NextPage } from 'next';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCurationPostListsThunk } from '@slices/curation/curationPostSlice';
import { useSelector } from 'react-redux';

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurationPostListsThunk());
  }, []);

  const curations = useAppSelector(
    (state: RootState) => state.curation.CurationPostLists
  );
  const isLoading = useAppSelector((state) => state.curation.pending);
  console.log(curations, isLoading);

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          border: '1px dotted blackCurationPostLists',
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

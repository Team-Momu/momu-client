import type { NextPage } from 'next';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const redirect = process.env.KAKAO_REDIRECT_URI;
  const apiKey = process.env.KAKAO_REST_API_KEY;

  console.log('🔥env test', redirect);

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
        {redirect}
        <button
          onClick={() => router.push('/profile/1')}
          style={{ marginBottom: '20px' }}
        >
          누르면 먹비티아이로 넘어가는 버튼
        </button>

        <button onClick={() => router.push('/feed')}>
          누르면 피드로 넘어가는 버튼
        </button>
        <div>dd</div>
        <button
          onClick={() =>
            router.push(
              `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}`
            )
          }
        >
          카카오로그인
        </button>
      </div>
    </>
  );
};

export default Home;

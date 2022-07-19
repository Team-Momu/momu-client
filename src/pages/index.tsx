import type { NextPage } from 'next';
import { RootState, useAppDispatch, useAppSelector } from 'store/store';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';

const Home: NextPage = () => {
  const router = useRouter();

  const redirect = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;

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
        <div>dd</div>
        <KakaoButton
          onClick={() =>
            router.push(
              `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`
            )
          }
        >
          <KakaoText>카카오 로그인</KakaoText>
        </KakaoButton>
      </div>
    </>
  );
};

const KakaoButton = styled.button`
  position: absolute;
  width: 343px;
  height: 56px;
  left: 16px;
  top: 656px;

  background: #ffe812;
`;

const KakaoText = styled.div`
  position: absolute;
  width: 109px;
  height: 24px;
  left: 134px;
  top: 16px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  color: #000000;
`;

export default Home;

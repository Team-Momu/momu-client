import type { NextPage } from 'next';
import wrapper, {
  RootState,
  useAppDispatch,
  useAppSelector,
} from 'store/store';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import { userInfo } from '@slices/user/userThunk';
import { useEffect } from 'react';
import Image from 'next/image';
import kakaoLogo from '@public/img/landing/kakaoLogo.png';
import axios from 'axios';
import Spinner from '@common/Spinner';
import camera from '@public/img/camera.png';
import defaultProfile from '@public/img/defaultProfile.png';

// @ts-ignore
const Home: NextPage = ({ data }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const me = useAppSelector((state: RootState) => state.user.me);
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  useEffect(() => {
    if (me?.data?.id && me?.data?.nickname === null) {
      router.push('/profile');
    }
    if (me?.data?.id && me?.data?.nickname && me?.data?.mbti === null) {
      router.push('/profile/1');
    }
    if (me?.data?.id && me?.data?.nickname && me?.data?.mbti) {
      router.push('/feed');
    }
  }, [me]);

  const ssrRendering = () => {
    if (data.id && data.nickname === null) {
      return <Spinner />;
    }
    if (data.id && data.nickname && data.mbti === null) {
      return <Spinner />;
    }
    if (data.id && data.nickname && data.mbti) {
      return <Spinner />;
    }
    if (!data.id) {
      return (
        <Wrapper>
          <Text>뭐 먹을지 고민될 땐</Text>
          <Logo></Logo>
          <ServiceDescription>
            신촌 지역 기반 맛집 큐레이션 서비스 모무
          </ServiceDescription>

          <KakaoButton
            onClick={() =>
              router.push(
                `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`
              )
            }
          >
            <LogoContainer>
              <Image src={kakaoLogo} width={28} height={28} />
            </LogoContainer>
            <KakaoText>카카오 로그인</KakaoText>
          </KakaoButton>
        </Wrapper>
      );
    }
  };

  return <>{ssrRendering()}</>;
};

const Wrapper = styled.div`
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  width: calc(100% + 16px * 2);
  margin: 0 16px 0 -16px;
  background-image: url('/img/landing/Landing.png');
  background-size: 100% 100%;
`;

const Text = styled.div`
  padding-top: 240px;
  padding-left: 32px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #000000;
`;
const Logo = styled.div`
  width: 113px;
  height: 27px;
  margin-left: 32px;
  margin-top: 16px;
  background-image: url('/img/landing/Logo.png');
  background-size: 100% 100%;
`;
const ServiceDescription = styled.div`
  padding-left: 32px;
  padding-top: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  color: #000000;
`;

const LogoContainer = styled.div`
  width: 28px;
  height: 28px;
  margin-left: 100px;
`;

const KakaoButton = styled.button`
  margin-top: 250px;
  margin-left: 16px;
  position: absolute;
  width: 343px;
  height: 56px;

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

// 유저 정보를 서버사이드에서 받아옴
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      if (cookie && req) {
        axios.defaults.headers.common['Cookie'] = cookie;
      }
      const { payload } = await store.dispatch(userInfo());
      const data = payload;
      return { props: { data, cookie } };
    }
);

export default Home;

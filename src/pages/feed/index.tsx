import { NextPage } from 'next';
import styled from 'styled-components';
import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';
import FeedHeader from 'components/feed/FeedHeader';
import wrapper, { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { UIEventHandler, useCallback, useEffect, useState } from 'react';
import { userInfo } from '@slices/user/userThunk';
import { useRouter } from 'next/router';
import NavBar from '@common/NavBar';
import useScroll from '../../utils/hooks/useScroll';
import axios from 'axios';
import { toast } from 'react-toastify';

const Feed: NextPage = ({ data }: any) => {
  // 유저 정보 불러오기
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { hasNext, percent, onScroll } = useScroll();
  const me = useSelector((state: RootState) => state.user.me);

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  useEffect(() => {
    if (me.data?.id && (!me.data?.mbti || !me.data?.nickname)) {
      router.push('/profile').then((r) =>
        toast('설정이 필요합니다.', {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
    }
  }, [me]);

  return (
    <Wrapper>
      <MainFeed />
      <SliderContainer className="sticky top-0">
        <FeedHeader />
      </SliderContainer>
      <FeedContainer onScroll={onScroll}>
        <FeedList hasNext={hasNext} percent={percent} me={me} />
      </FeedContainer>
      <NavContainer className="fixed">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookie = req ? req.headers.cookie : '';
      axios.defaults.headers.common['Cookie'] = '';
      if (cookie && req) {
        axios.defaults.headers.common['Cookie'] = cookie;
      }
      const { payload } = await store.dispatch(userInfo());
      const data = payload;
      return { props: { data, cookie } };
    }
);

export default Feed;

const Wrapper = styled.div`
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
const FeedContainer = styled.div`
  margin-left: 2px;
  background: #ffffff;
  padding-bottom: 75px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  overflow: auto;
`;

const SliderContainer = styled.div`
  background: #ffffff;
  z-index: 2;
`;
const NavContainer = styled.div`
  width: 343px;
  &.fixed {
    position: fixed;
    bottom: 0px;
  }
`;

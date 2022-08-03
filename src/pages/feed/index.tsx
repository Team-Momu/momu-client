import { NextPage } from 'next';
import styled from 'styled-components';
import FeedList from 'components/feed/FeedList';
import MainFeed from 'components/feed/MainFeed';
import FeedHeader from 'components/feed/FeedHeader';
import { RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { UIEventHandler, useCallback, useEffect, useState } from 'react';
import { userInfo } from '@slices/user/userThunk';
import { useRouter } from 'next/router';
import NavBar from '@common/NavBar';
import useScroll from '../../utils/hooks/useScroll';

const Feed: NextPage = () => {
  // 유저 정보 불러오기
  const dispatch = useAppDispatch();
  const router = useRouter();
  const me = useSelector((state: RootState) => state.user.me);
  const { hasNext, percent, onScroll } = useScroll();

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  // useEffect(() => {
  //   if (!me) {
  //     alert('로그인이 필요합니다.');
  //     router.push('/');
  //   }
  // }, [me]);

  return (
    <Wrapper>
      <MainFeed />
      <SliderContainer className="sticky top-0">
        <FeedHeader />
      </SliderContainer>
      <FeedContainer onScroll={onScroll}>
        <FeedList hasNext={hasNext} percent={percent} />
      </FeedContainer>
      <NavContainer className="fixed">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};

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

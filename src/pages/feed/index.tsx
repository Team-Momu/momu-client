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

const Feed: NextPage = () => {
  // 유저 정보 불러오기
  const dispatch = useAppDispatch();
  const router = useRouter();
  const me = useSelector((state: RootState) => state.user.me);
  const [hasNext, setHasNext] = useState(false);
  const [percent, setPercent] = useState(0);

  // useEffect(() => {
  //   if (!me) {
  //     alert('로그인이 필요합니다.');
  //     router.push('/');
  //   }
  // }, [me]);

  const onScroll = (e: any) => {
    const a = e.target.scrollTop;
    const b = e.target.scrollHeight - e.target.clientHeight;
    const percent = Math.round((a / b) * 100);
    console.log('🔥🔥🔥🔥', percent);
    if (percent >= 90) {
      setHasNext(true);
      setPercent(percent);
    } else {
      setHasNext(false);
    }
  };

  return (
    <Wrapper>
      <MainFeed />
      <SliderContainer className="sticky top-0">
        <FeedHeader />
      </SliderContainer>
      <FeedContainer onScroll={() => alert('hi')}>
        <FeedList hasNext={hasNext} percent={percent} />
      </FeedContainer>
      <NavContainer className="fixed">
        <NavBar />
      </NavContainer>
    </Wrapper>
  );
};

export default Feed;

const Wrapper = styled.div``;
const FeedContainer = styled.div`
  background: #ffffff;
  margin-bottom: 85px;
  height: 812px;
  overflow: auto;
`;

const SliderContainer = styled.div`
  background: #ffffff;
  z-index: 1;
`;
const NavContainer = styled.div`
  width: 343px;
  &.fixed {
    position: fixed;
    top: 678px;
  }
`;
